import "./FloatList.css"

const FloatList = (props) => {
    return (
        <div className="float-list">
            <label>{ props.label }</label>
            <select>
                { props.itens.map(item => <option key={ item }>{ item }</option>)}
            </select>
        </div>
    )}

export default FloatList;