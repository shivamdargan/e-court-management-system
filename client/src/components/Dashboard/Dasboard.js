import React, { useEffect } from 'react'
import Calendar from './Calendar.js';
import Button from '../Button.js';
import Newcases from './Newcases.js';
import '../../assets/css/dashboard.css';
import { useSelector} from "react-redux";
import URL from '../../URL.js';
// import Newcases from "../../components/Dashboard/Newcases";
// import Cases from "../../components/Dashboard/Cases";
// import { Redirect } from 'react-router'


const Dasboard = () => {
   
    const profileData = useSelector((state) => state.user.value);
    
  return (
    <div className='dashboard-right'>
      
        <div className='calendar-section'>
            <div className='welcome'>
                <div className='welcome-info'>
                    <h1>Welcome,</h1>
                    <h3>{(profileData === undefined )? "Loading..." : profileData.name}</h3>
                    <p>{(profileData === undefined )? "Loading..." : profileData.location}</p>
                </div>
                <div className='welcome-ops'>
                    <div className='welcome-btn'>
                    {(profileData === undefined )? "Loading..." : profileData.type === "judge" ? <Button content="Schedule" /> : <Button link = "/efiling" content= "File A Case" />} 
                    </div>
                </div>
            </div>
            
            <Calendar/>
        </div>
        <div className='cases-section'>
            <Newcases/>
        </div>
    </div>
    
  )
}

export default Dasboard