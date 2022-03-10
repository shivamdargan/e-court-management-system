import '../../assets/css/CasesSection.css';

const CaseCards=(props) =>{
    return (
        <div className='card'>
            <div className='date'>
                <h4>{props.d}</h4>
            </div>
            <div className='body'>
                <h2>{props.t}</h2>
                <p>{props.l}</p>
            </div>
        </div>
    );
}

export default CaseCards;