import React from 'react'
import Calendar from './Calendar.js';

const Dasboard = () => {
  return (
    <div className='dashboard-right'>
        <div className='calendar-section'>
            <div className='welcome'>
                <div className='welcome-info'>
                    <h1>Welcome</h1>
                    <p>Barinder Singh</p>
                    <p>Haryana High Court</p>
                </div>
                <div className='welcome-ops'>
                    <button>Schedule</button>
                    <button>Upload Docs</button>
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