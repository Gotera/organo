import "./TextField.css"

export const TextField = (props) =>  {

    const placeholderModifier = `${props.placeholder}...` 

    return (
        <div className="text-field">
            <label>{ props.label }</label>
            <input placeholder={placeholderModifier}/>
        </div>
    )
}

export default TextField;