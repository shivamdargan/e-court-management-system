import React from 'react';
import '../../assets/css/casesSection.css';
import '../../assets/css/dashboard.css';
import CaseCards from './CaseCards';
import { useState } from 'react';
import { useEffect } from 'react';
import URL from '../../URL';
import Loader from './Loader';
import '../../assets/css/schedule.css';
import { useDispatch } from 'react-redux';
import { setCaseNumber } from '../../Reducers/case';


const CasesSection = (props) => {

 

  const dispatch = useDispatch();
  const [dashCases,setDashCases] = useState(null);
  const [newCases, setNewCases] =useState([]);
  const [pendingCases, setPendingCases] = useState([]);
  const [disposedCases,setDisposedCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState();

  const categorizeCases = () => {

            if(dashCases === null){
              setLoading(true)
            } 
            else
            {
                console.log(dashCases)
                setLoading(false);
                (dashCases.cases).map((dashCase) => { 
                    
                  if(dashCase.hearingDate === "Hearing Date not assigned yet")
                  {
                    console.log("In New Case ")
                    setNewCases(prev => 
                      [...prev,
                      dashCase]);
                  }
                  else if(dashCase.status === "closed")
                  {
                    console.log("In Closed Cases !")
                    setDisposedCases(prev => 
                      [...prev,
                      dashCase]);
                  }
                  else
                  {
                    console.log("In Already Heard Cases !")
                    setPendingCases(prev => 
                      [...prev,
                      dashCase]);
                  }
                    })
              }

      } 

    const getDashboardCases = () => {
      fetch(`${URL}/dashboard/profile`,  {credentials: "include"})
      .then(async response => {
          if(response.ok){
              response.json().then(data => {
                console.log(data);
                setDashCases(data);
                setUpdate(1);              });
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
  useEffect(() =>{
    getDashboardCases();  
   },[]);

 
   useEffect(() =>{
    categorizeCases();  
   },[update]);
   

   const schedulebtnStyle = {
     backgroundColor: "#cc9c6c",
     color: "white",
     border: "none",
     height: "40px",
     width: "200px",
     borderRadius: "10px",
     fontSize: "18px"
   }

   const modalHandler = (cnrNumber) => {
    dispatch(setCaseNumber(cnrNumber))
   }

  return (
    <div className='right'>
      <div className='top'>
        <h1>Cases</h1>
        <p>Filter</p>
      </div>
      { loading ? <div>
          <Loader/>
      </div>: <div>
              <h3>New Cases</h3>
              <div className='row'>
                {console.log(newCases)}
                { newCases.length === 0 ? "No New Alloted Cases To Show" :
                  newCases.map((newCase) => {
                    return <div className='col-sm-4'>
                          <CaseCards d={newCase.title} t={newCase.details} l={newCase.hearingDate} cnr = {newCase.cnr}/>
                          <div classname="schedule-btn" onClick={() => props.onHide()}>
                          <button onClick = {() => modalHandler(newCase.cnr)} style={schedulebtnStyle}>
                              Schedule Hearing
                          </button>
                          </div>
                        </div>;
                      })
                    }
                </div>

                <h3>Pending Cases</h3>
              <div className='row'>
                { pendingCases.length === 0 ? <h5>No Pending Cases To Show...</h5>:
                  pendingCases.map((pendingCase) => {
                    return <div className='col-sm-4'>
                          <CaseCards d={pendingCase.title} t={pendingCase.details} l={pendingCase.hearingDate} cnr = {pendingCase.cnr}/>
                          <div onClick={() => props.onHide()}>
                          <button onClick = {() => modalHandler(pendingCase.cnr)} style={schedulebtnStyle}>
                              Schedule Hearing
                          </button>
                          </div>
                        </div>;
                      })
                    }
                </div>

                <h3>Disposed Cases</h3>
              <div className='row'>
                { disposedCases.length === 0 ? "No Closed Cases To Show !" :
                  disposedCases.map((disposedCase) => {
                    return <div className='col-sm-4'>
                          <CaseCards d={disposedCase.title} t={disposedCase.details} l={disposedCase.hearingDate} cnr = {disposedCase.cnr} status='true'/>
                        </div>;
                      })
                    }
                </div>
        </div>
}
    </div>
  )
}

export default CasesSection