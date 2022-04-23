import { useEffect, useState } from 'react';
import '../../assets/css/casesSection.css';
const CaseCards=(props) =>{

    const [URL, setURL] = useState(null)
    useEffect(() => {
        setURL("/caseDetails/" + props.cnr);
    },[])
    return (
        <div className='card'>
            {/* {redirectPage} */}
            <div className='date'>
                <h4>{props.d}</h4>
            </div>
            <div className='body'>
                <h2>{props.t}</h2>
                <a href = {URL} ><p>{props.l}</p></a>
            </div>
        </div>
        
    );
}

export default CaseCards;