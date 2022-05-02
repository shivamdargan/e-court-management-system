import React from 'react'
import '../../assets/css/schedule.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCaseNumber } from '../../Reducers/case';
import { useState } from 'react';
const ScheduleModal = (props) => {

  const dispatch = useDispatch();
  const caseNumber = useSelector((state) => state.case.value);
  console.log(caseNumber);

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
  
  const submitHandler = () => {
    
  }
  return (
    <>
    {props.show ?  <div className='modal'>
        <div className='modal-form'>
        <form className='form'>
            <label className='modal-head' htmlFor="birthdaytime">Choose Date & Time:</label>
            <input onChange = {(e) => setHearingDateHandler(e)} type="datetime-local" id="caseSchedule" name="Schedule_Case_Hearing"/>
            <input onClick={submitHandler} style={submitStyle} type="submit"/>
            <a onClick={closeModalHandler} style={closeStyle}>Close</a>
        </form>
        </div>
    </div> : null}
    
    
    </>
  )
}

export default ScheduleModal