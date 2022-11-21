import "./Colaboretor.css"

const Colaboretor = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: props.backgroundColorTime }}> 
                <img src={ props.image } alt={ props.name } />
            </div>

            <div className='rodape'>
                <h4>{ props.name }</h4>
                <h5>{ props.role }</h5>
            </div>
        </div>
    )
}

export default Colaboretor;