import "./Form.css"
import TextField from "../TextField"
import FloatList from "../FloatList";
import Button from "../Button";

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const onSend = (event) => {
        event.preventDefault();
        console.log('Formulário Enviado')
    }

    return (
        <section className="formulary">
            <form onSubmit={onSend}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <FloatList label="Time" itens={ times }/>
                <Button text="Ciar Card"/>
            </form>
        </section>
    )}

export default Form;