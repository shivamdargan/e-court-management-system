import '../../assets/css/casesSection.css';
import '../../assets/css/dashboard.css';
import { Files } from './dummy';
import CaseCards from './CaseCards';
import { useState } from 'react';
import { useEffect } from 'react';
import URL from '../../URL';

const CasesSection = () => {

  const [dashCases,setDashCases] = useState(null);
  const getDashboardCases = () => {
    fetch(`${URL}/dashboard/profile`,  {credentials: "include"})
    .then(async response => {
        if(response.ok){
            response.json().then(data => {
               setDashCases(data)
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
  useEffect(() =>{
    getDashboardCases();
   }, [])

   console.log(dashCases)
  return (
    <div className='right'>
      <div className='top'>
        <h1>Cases</h1>
        <p>Filter</p>
      </div>
      <h3>New Cases</h3>
      <div className='row'>
        { dashCases === null ? "Loading..." :
          (dashCases.cases).map((dashCase) => {
            return <div className='col-sm-4'>
                  <CaseCards d={dashCase.title} t={dashCase.details} l={dashCase.hearingDate}/>
                </div>;
              })
            }
        </div>

        {/* <h3>Pending Cases</h3> */}
      {/* <div className='row'>
        {
          pending.map((x)=> {
            return(
                <div className='col-sm-4'>
                <CaseCards d={x.date} t={x.title} l={x.l} />
              </div>
                );
              })
            }
        </div> */}

        {/* <h3>Disposed Cases</h3> */}
      {/* <div className='row '>
        {
          disposed.map((x)=> {
            return(
                <div className='col-lg-4'>
                  <CaseCards d={x.date} t={x.title} l={x.l} />
                </div>
                );
              })
            }
        </div> */}
    </div>
  )
}

export default CasesSection