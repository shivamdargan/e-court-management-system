import React from 'react'
import {useState , useEffect} from 'react'
const Calendar = () => {

  const timestyle={
    color: "#C89A69",
    fontSize: "17px"
  };
  const [monthModulo , setMonthModulo ] = useState();
  var today = new Date();
   
  let dd = String(today.getDate()).padStart(2, '0');

  
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Sun", "Mon","Tue", "Wed","Thu","Fri","Sat"]
let dayNo = today.getDay();
let monthNo = today.getMonth();

const dateHandler = () => {
      
        if(monthNo === 0 || monthNo === 2 || monthNo === 4 || monthNo === 6 || monthNo === 7 || monthNo === 9 || monthNo === 11 )
        { 
          setMonthModulo(31);
        }
        else if(monthNo === 1)
        {
          setMonthModulo(28)
        }
        else
        {
          setMonthModulo(30)
        }
  }

  useEffect(() => {
      dateHandler();
  }, []);

  return (
    <div className='calendar'>
        <div className='calendar-info'>
            <h1>Calendar</h1>
            <p> <span>{dd + " " + monthNames[today.getMonth()] } <br/> <b>~</b> <br/> { + (Number(dd)+5) + " " + monthNames[today.getMonth()]} </span></p>
        </div>
        <div className='calendar-box'>
            <div className='calendar-circles'>
                <div className='circle-rect'>
                  <div className='circle today'>
                    <p>{dayNames[dayNo % 7]}</p>
                    <p>{Number(dd)% monthModulo}</p>
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
                    <p>{dayNames[(dayNo+1) % 7]}</p>
                    <p>{(Number(dd)+1)% monthModulo}</p>
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
                    <p>{dayNames[(dayNo+2) % 7]}</p>
                    <p>{(Number(dd)+2)% monthModulo}</p>
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
                    <p>{dayNames[(dayNo+3) % 7]}</p>
                    <p>{(Number(dd)+3)% monthModulo}</p>
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
                    <p>{dayNames[(dayNo+4) % 7]}</p>
                    <p>{(Number(dd)+4)% monthModulo}</p>
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