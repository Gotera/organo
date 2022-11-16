import './Time.css'

const Time = (props) => {
    return (

        <section className='time' style={{ backgroundColor: props.colorSecundary }}>
            <h3 style={{ borderColor: props.colorPrimary }}>{ props.name }</h3>
        </section>
    )
}

export default Time;