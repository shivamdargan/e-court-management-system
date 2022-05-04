import React from 'react'
import '../../assets/css/tracker.css';
import '../../assets/css/casesSection.css';
import signupimg from '../../assets/media/signup.png';
import { useState } from 'react';
import URL from '../../URL';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';

const CaseTracker = () => {

    const [cnrNumber, setCnrNumber] = useState();
    const [redirect, setRedirect] = useState();
    const schedulebtnStyle = {
        backgroundColor: "#cc9c6c",
        color: "white",
        border: "none",
        height: "40px",
        width: "200px",
        borderRadius: "10px",
        fontSize: "18px",
      }
    const setCnrNumberHandler = (e) => {
        setCnrNumber(e.target.value);
  }

  const searchHandler = (event) => {
    event.preventDefault();
    fetch(`${URL}/checkValid/${cnrNumber}`,  {credentials: "include"})
    .then(async response => {
        if(response.ok){
            response.json().then(data => {
             
                if(data.validCnr)
                {
                    const redirectUrl = `/CaseDetails/${cnrNumber}`
                    setRedirect(<Redirect to = {redirectUrl} />)
                }
                else
                {
                    swal({
                        title: "Oops",
                        text: "No Case With Such CNR Number Exists, Please Try Again !",
                        icon: "warning",
                      });
                }
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

  
    return (
       <div className="right">
           {redirect}
            <div className="top font">
                <h1>Track Details Of Case </h1>
            </div>
            <div className="search-heading">
                <h3>Enter <span style={{"color":"#C89A69"}}>Case Number Record </span> Of The Case </h3>
            </div>
            <div className="wrap">
                <div className="search">
                    <input onChange = {(e) => setCnrNumberHandler(e)} type="text" className="searchTerm" placeholder="Enter CNR Number Of The Case" />
                    <button onClick = {searchHandler} type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <button onClick = {searchHandler} className = "submit-button" style={schedulebtnStyle}>
                Get Details
            </button>
            <img style = {{"maxHeight":"30%","maxWidth":"30%"}} className = "img-tracker" src={signupimg} />
      
    </div>
   
    )
}

export default CaseTracker