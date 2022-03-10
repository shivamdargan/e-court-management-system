import React from 'react'
import '../assets/css/form.css';

const Efilling = () => {
  return (
    <div className='efiling'>
        <div className='e-form'>
            <h1>e-Filing</h1>
            <div className='form'>
                <input className='forminput' type="text" name="title" placeholder='Enter Title'></input>
                <input className='forminput desc' type="text" name="description" placeholder='Description'></input>
                <input className='forminput' type="text" name="clause" placeholder='Enter Clause(IPC Section)'></input>
                <input className='forminput' type="text" name="location" placeholder='Court Location'></input>
                <input className='forminput' type="text" name="documents" placeholder='Upload Documents'></input>
                <div className='degreeResponse'>
                <p>Degree of Responsibility</p>
                <form>
                <input className='radio' type="radio" name="degree" value="1" />1
                <input className='radio' type="radio" name="degree" value="2" />2
                <input className='radio' type="radio" name="degree" value="3" />3
                <input className='radio' type="radio" name="degree" value="4" />4
                <input className='radio' type="radio" name="degree" value="5" />5
                </form>
                </div>
                <div className='accused'>
                <p>Details of Accused</p>
                </div>
                <input className='forminput' type="text" name="Name" placeholder='Name'></input>
                <input className='forminput' type="text" name="Phone" placeholder='Phone No.'></input>
                <select className='gender' name="gender" id="gender">
                    <option value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                <input className='forminput' type="text" name="Age" placeholder='Age*'></input>
            </div>
            <button className='submitbtn'>
                Submit
            </button>
        </div>
    </div>
  )
}

export default Efilling