import React from 'react';
import { useEffect, useState } from 'react';
import '../../assets/css/casesSection.css';
import Moment from 'react-moment';

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
                <a href = {URL} ><p> {props.l === "Hearing Date not assigned yet" ? props.l :  <Moment format="YYYY/MM/DD HH:mm">{props.l}</Moment>}</p></a>
            </div>
            {/* <div className='schedule-btn'>
                <button disabled={props.status}>Schedule</button>
            </div> */}
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button> */}
            
        </div>
        
    );
}

export default CaseCards;