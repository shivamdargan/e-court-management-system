import React, { useEffect, useState } from 'react'
import Calendar from './Calendar.js';
import Button from '../Button.js';
import '../../assets/css/dashboard.css';
import URL from '../../URL.js';

const Dasboard = () => {
    const [profileData, setProfileData] = useState();
    const getProfile = () => {
        fetch(`${URL}/users/me`,  {credentials: "include"})
        .then(async response => {
            if(response.ok){
                response.json().then(data => {
                 
                   setProfileData(data)
                });
             }
            else{
                throw response.json();
            }
          })
          .catch(async (error) => {
           
            const errorMessage = await error;
            console.log(errorMessage)
          })
    }
console.log(profileData);

useEffect(()=>{
    getProfile();
},[])
  return (
    <div className='dashboard-right'>
        <div className='calendar-section'>
            <div className='welcome'>
                <div className='welcome-info'>
                    <h1>Welcome,</h1>
                    <h3>{profileData.name}</h3>
                    <p>{profileData.location}</p>
                </div>
                <div className='welcome-ops'>
                    <div>
                        <Button content="Schedule" />
                    </div>
                    <div>
                        <Button content="Upload Doc" />
                    </div>
                </div>
            </div>
            <Calendar/>
        </div>
        <div className='cases-section'>
            <Newcases/>
            <Cases/>
        </div>
    </div>
  )
}

export default Dasboard