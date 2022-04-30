import React from 'react';
import { useEffect, useState } from 'react';
import '../../assets/css/casesSection.css';
import { Redirect } from 'react-router';
import ScheduleModal from '../Schedule/ScheduleModal';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button'

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