import SideNav from "./SideNav";
import '../../assets/css/casesSection.css';
import { useParams } from "react-router-dom";
import URL from "../../URL";
import Carousel from "../carousel";
import { useEffect, useState } from "react";
import Moment from 'react-moment';
const Case=() =>{

    const [caseDetail, setCaseDetail] = useState(null);
    const params = useParams();
    const cnrNumber = params.cnr;

    const caseDetailsHandler = () => {
         fetch(`${URL}/search/cnrNumber/${cnrNumber}`,  {credentials: "include"})
        .then(async response => {
            if(response.ok){
                response.json().then(data => {
                   console.log(data)
                   setCaseDetail(data)
             
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
       
    useEffect (() => {
        caseDetailsHandler();
    },[])

    return (
        <div className="dashboard">
            <SideNav/>
            <div className="right"> 
                <div className="top">
                    <h1>{ caseDetail === null ? "Loading..." : caseDetail.Case.title }</h1>
                </div>
                <div className="one">
                    <h3>Description</h3>
                    <p> {caseDetail === null ? "Loading..." : caseDetail.Case.details}
</p>
                </div>
                <div className="one two">
                    <div className="l">
                        <div>
                            <h3>CNR:</h3><h6>{caseDetail === null ? "Loading..." : cnrNumber}</h6>
                        </div>
                        <div>
                            <h3>Clause No:</h3><h6>{caseDetail === null ? "Loading..." : caseDetail.Case.clause}</h6>
                        </div>
                        <div>
                            <h3>Location:</h3><h6>{caseDetail === null ? "Loading..." : caseDetail.Case.location}</h6>
                        </div>
                    </div>
                    <div className="l r">
                        <div>
                            <h3>Date of Filing:</h3><h6>{caseDetail === null ? "Loading..." : <Moment format="YYYY/MM/DD HH:mm">{caseDetail.Case.date}</Moment> }</h6>
                        </div>
                        <div>
                            <h3>Last Hearing Date:</h3><h6>{caseDetail === null ? "Loading..." : 
                            caseDetail.Case.hearingDate === undefined ? "Not Heard Yet" : <Moment format="YYYY/MM/DD HH:mm">{caseDetail.Case.hearingDate}</Moment> 
                            }</h6>
                        </div>
                        <div>
                            <h3>Next Hearing Date:</h3><h6>Not Decided Yet</h6>
                        </div>
                    </div>
                </div>
                <div className="one">
                    <h3>Details of Accused</h3>
                    <div className="two">
                        <div className="l">
                            <div>
                                <h3>Name:</h3><h6>{caseDetail === null ? "Loading..." : caseDetail.Case.nameAccused}</h6>
                            </div>
                            <div>
                                <h3>Phone No:</h3><h6>{caseDetail === null ? "Loading..." : caseDetail.Case.phone}</h6>
                            </div>
                        </div>
                        <div className="l r">
                            <div>
                                <h3>Gender:</h3><h6>{caseDetail === null ? "Loading..." : caseDetail.Case.gender}</h6>
                            </div>
                            <div>
                                <h3>Age:</h3><h6>{caseDetail === null ? "Loading..." : caseDetail.Case.age}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="one">
                    <h3>Supporting Documents</h3>
                    <div className="two-two">
                        <div>
                            {caseDetail === null ? "Loading..." : <Carousel carouselId={cnrNumber} images={caseDetail.Case.images}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Case;