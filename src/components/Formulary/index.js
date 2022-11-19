import "./Form.css"
import TextField from "../TextField"
import FloatList from "../FloatList";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const onSend = (event) => {
        event.preventDefault();
        props.onNewColaboretorRegister({
            name,
            role,
            image,
            time
        })
        setName('')
        setRole('')
        setImage('')
        setTime('')
    }

    return (
        <section className="formulary">
            <form onSubmit={onSend}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name} 
                    whenChange={value => setName(value)} 
                />
                <TextField 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    whenChange={value => setRole(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChange={value => setImage(value)}
                />
                <FloatList 
                    label="Time" 
                    itens={ props.times }
                    value={ time }
                    whenChange={value => setTime(value)}
                />
                <Button text="Ciar Card"/>
            </form>
        </section>
    )}

export default Form;