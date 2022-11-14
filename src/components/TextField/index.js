import "./TextField.css"

export const TextField = (props) =>  {

    const placeholderModifier = `${props.placeholder}...` 

    const onEnter = (event) => {
        props.whenChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{ props.label }</label>
            <input value={props.value} onChange={onEnter} required={true} placeholder={placeholderModifier}/>
        </div>
    )
}

export default TextField;