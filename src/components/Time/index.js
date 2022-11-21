import Colaboretor from '../Colaboretor';
import './Time.css'

const Time = (props) => {
    return (
        ( props.colaboretors.length  ) ? <section className='time' style={{ backgroundColor: props.colorSecundary }}>
            <h3 style={{ borderColor: props.colorPrimary }}>{ props.name }</h3>
            <div className='colaboretors'>
                { props.colaboretors.map( colaboretor => <Colaboretor key={colaboretor.name} backgroundColorTime={ props.colorPrimary } name={ colaboretor.name } role={ colaboretor.role } image={ colaboretor.image } /> ) }
            </div>
        </section>
        : ''
    )
}

export default Time;