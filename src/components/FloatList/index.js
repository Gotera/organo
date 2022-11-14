import "./FloatList.css"

const FloatList = (props) => {
    return (
        <div className="float-list">
            <label>{ props.label }</label>
            <select onChange={event => props.whenChange(event.target.value)} value={props.value} >
                { props.itens.map(item => <option key={ item }>{ item }</option>)}
            </select>
        </div>
    )}

export default FloatList; 