import "./TextField.css"

export const TextField = (props) =>  {

    const placeholderModifier = `${props.placeholder}...` 

    return (
        <div className="text-field">
            <label>{ props.label }</label>
            <input required={true} placeholder={placeholderModifier}/>
        </div>
    )
}

export default TextField;