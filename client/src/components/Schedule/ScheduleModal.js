import React from 'react'
import '../../assets/css/schedule.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCaseNumber } from '../../Reducers/case';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import URL from '../../URL';
import swal from 'sweetalert';

const ScheduleModal = (props) => {

  let AOS;
  useEffect(() => {
      const AOS = require("aos");
      AOS.init({
        once: true,
      });
    }, []);
  
    useEffect(() => {
      if (AOS) {
        AOS.refresh();
      }
    });

  const dispatch = useDispatch();
  const caseNumber = useSelector((state) => state.case.value);

  const submitStyle = {
    backgroundColor: "#cc9c6c",
    border: "none",
    borderRadius: "25px",
    width: "250px",
    height: "35px",
    marginTop: "20px",
    color: "white"
  }

  const closeStyle = {
    backgroundColor: "white",
    border: "1px solid #cc9c6c",
    color: "#cc9c6c",
    cursor: "pointer",
    width: "250px",
    marginTop: "15px",
    borderRadius: "25px",
    height: "35px"
  }

  const closeModalHandler = () => {
    props.onHide();
    dispatch(removeCaseNumber());
  }

  const [hearingDate, setHearingDate] = useState();
  const setHearingDateHandler = (e) => {
    setHearingDate(e.target.value);
  }

  
  const submitHandler = (event) =>
    {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
              hearingDate : hearingDate,
              cnr: caseNumber
            }),  
            credentials: "include"
            };
            fetch(`${URL}/add/hearingDate`, requestOptions )
            .then(async response => {
                response.json().then(data =>  {
                  
                    if(response.ok){

                      swal({
                        title: "Success!",
                        text: "Hearing Date Updated Successfully!",
                        icon: "success",
                      });
                       window.location.reload();
                     }
                    else{

                      swal({
                        title: "Failed!",
                        text: "Some Error Occured, Please Try Again !",
                        icon: "error",
                      });
                        
                    }
                  });
                
              })
              .catch(async (error) => {
                const errorMessage = await error;
                console.log(errorMessage)
                
              })
    }
    
  return (
    <>
    {props.show ?  <div className='modal' data-aos = "fade-down" >
        <div className='modal-form'>
        <form className='form'>
            <label className='modal-head' htmlFor="birthdaytime">Choose Date & Time:</label>
            <input onChange = {(e) => setHearingDateHandler(e)} type="datetime-local" id="caseSchedule" name="Schedule_Case_Hearing"/>
            <input onClick={submitHandler} style={submitStyle} type="submit"/>
            <a onClick={closeModalHandler}  style={closeStyle}>Close</a>
        </form>
        </div>
    </div> : null}
    
    
    </>
  )
}

export default ScheduleModal