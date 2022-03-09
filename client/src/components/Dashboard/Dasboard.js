import React from 'react'
import Calendar from './Calendar.js';
import Button from '../Button.js';
import '../../assets/css/dashboard.css';

const Dasboard = () => {
  return (
    <div className='dashboard-right'>
        <div className='calendar-section'>
            <div className='welcome'>
                <div className='welcome-info'>
                    <h1>Welcome,</h1>
                    <h3>Barinder Singh</h3>
                    <p>Haryana High Court</p>
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
            
        </div>
    </div>
  )
}

export default Dasboard