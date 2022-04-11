import React from 'react'

const Calendar = () => {

  const timestyle={
    color: "#C89A69",
    fontSize: "17px"
  };

  return (
    <div className='calendar'>
        <div className='calendar-info'>
            <h1>Calendar</h1>
            <p>Mar 8,2022 - Mar 14,2022</p>
        </div>
        <div className='calendar-box'>
            <div className='calendar-circles'>
                <div className='circle-rect'>
                  <div className='circle today'>
                    <p>Tue</p>
                    <p>8</p>
                  </div>
                  <div className='rect'>
                    <div className='case-1'>
                      <p style={timestyle}>9:00 AM</p>
                      <p>Court Hearing</p>
                    </div>
                    <div className='case-2'>
                      <p style={timestyle}>3:00 PM</p>
                      <p>Court Hearing</p>
                    </div>
                  </div>
                </div>
                <div className='circle-rect'>
                  <div className='circle'>
                    <p>Wed</p>
                    <p>9</p>
                  </div>
                  <div className='rect'>
                  <div className='case-1'>
                      <p style={timestyle}>9:00 AM</p>
                      <p>Court Hearing</p>
                    </div>
                    <div className='case-2'>
                      <p style={timestyle}>3:00 PM</p>
                      <p>Court Hearing</p>
                    </div>
                  </div>
                </div>
                <div className='circle-rect'>
                  <div className='circle'>
                    <p>Thu</p>
                    <p>10</p>
                  </div>
                  <div className='rect'>
                  <div className='case-1'>
                      <p style={timestyle}>9:00 AM</p>
                      <p>Court Hearing</p>
                    </div>
                    <div className='case-2'>
                      <p style={timestyle}>3:00 PM</p>
                      <p>Court Hearing</p>
                    </div>
                  </div>
                </div>
                <div className='circle-rect'>
                  <div className='circle'>
                    <p>Fri</p>
                    <p>11</p>
                  </div>
                  <div className='rect'>
                  <div className='case-1'>
                      <p style={timestyle}>9:00 AM</p>
                      <p>Court Hearing</p>
                    </div>
                    <div className='case-2'>
                      <p style={timestyle}>3:00 PM</p>
                      <p>Court Hearing</p>
                    </div>
                  </div>
                </div>
                <div className='circle-rect'>
                  <div className='circle'>
                    <p>Sat</p>
                    <p>12</p>
                  </div>
                  <div className='rect'>
                  <div className='case-1'>
                      <p style={timestyle}>9:00 AM</p>
                      <p>Court Hearing</p>
                    </div>
                    <div className='case-2'>
                      <p style={timestyle}>3:00 PM</p>
                      <p>Court Hearing</p>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Calendar