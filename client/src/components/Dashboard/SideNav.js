import React, { useState } from 'react'
import '../../assets/css/dashboard.css';
import logo from '../../assets/media/logo.png';
import dashboard from '../../assets/media/dashboard.png';
import cases from '../../assets/media/cases.png';
import calendar from '../../assets/media/calendar.png';
import tracker from '../../assets/media/tracker.png';
import courts from '../../assets/media/courts.png';
import profile from '../../assets/media/profile.png';
import logout from '../../assets/media/logout.png';
import swal from 'sweetalert';
import URL from '../../URL';
import { Redirect } from 'react-router';
import { useSelector} from "react-redux";
import { useEffect } from 'react';

const SideNav = (props) => {

    const profileData = useSelector((state) => state.user.value);
    const redirectHandler = () => {
        if(Object.keys(profileData).length === 0 )
        {
            setRedirect(<Redirect to = "/"></Redirect> );
        }
    }
    
    useEffect(() => {
        redirectHandler();
    },[])

    const [redirect,setRedirect] = useState(null);
    let dashboardActiveClass;
    let casesActiveClass;
    let calendarActiveClass;
    let TrackerActiveClass;
    let CourtsActiveClass;
    let ProfileActiveClass;

   if(props.section)
   {
     dashboardActiveClass = props.section.localeCompare("dashboard") === 0 ? "activeSection":"";
     casesActiveClass = props.section.localeCompare("case") === 0 ? "activeSection":"";
     calendarActiveClass = props.section.localeCompare("calendar") === 0 ? "activeSection":"";
     TrackerActiveClass = props.section.localeCompare("tracker") === 0 ? "activeSection":"";
     CourtsActiveClass = props.section.localeCompare("courts") === 0 ? "activeSection":"";
     ProfileActiveClass = props.section.localeCompare("profile") === 0 ? "activeSection":"";
   }
    

    if(props.section === undefined)
    {
        casesActiveClass = "activeSection";
    }
    
    const logoutHandler = (event) =>
    {
       
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
            };
            fetch(`${URL}/users/logout`, requestOptions )
            .then(async response => {
                
                setRedirect(<Redirect to="/"/>)
               
                response.json().then(data =>  {
                    
                    if(response.ok){
                        
                        setRedirect(<Redirect to="/"/>)
                        swal({
                          title: "Success!",
                          text: "User Successfully Logged Out",
                          icon: "success",
                        });
                       

                     }
                    else{
                        setRedirect(<Redirect to="/"/>)
                      swal({
                        title: "Failed!",
                        text: data._message === undefined ? " Unknown Error Occured !": "Error Occurred !",
                        icon: "error"
                      });
                      
                        //throw response.json();
                    }
                  });
                
              })
              .catch(async (error) => {
                const errorMessage = await error;
                console.log(errorMessage)
                
              })
    }


    const btnStyle = {
        color: "#E1C7AA"
    }

  return (
    <div className='sidenav'>
        {redirect}
        <div className='logosection'>
            <img src={logo}></img>
        </div>
        <div className='linkssection'>
            <div className='link'>
                <a href='/dashboard'>
                    <img src={dashboard} width="20px" height="20px"></img>
                    <a className = {dashboardActiveClass} >Dashboard</a>
                </a>
            </div>
            <div className='link'>
                <a href='/cases'>
                    <img src={cases} width="20px" height="20px"></img>
                    <a className= {casesActiveClass} >Cases</a>
                </a>
            </div>
            <div className='link'>
            <a href='/calendar'>
                <img src={calendar} width="20px" height="20px"></img>
                <a className= {calendarActiveClass}>Calendar</a>
            </a>
            </div>
            <div className='link'>
            <a href = "/tracker" >
                <img src={tracker} width="20px" height="20px"></img>
                <a className={TrackerActiveClass}>Tracker</a>
            </a>
            </div>
            
            <div className='link'>
            <a href= "/courts">
                <img src={courts} width="20px" height="20px"></img>
                <a className= {CourtsActiveClass} >Courts</a>
            </a>
            </div>
            <div className='link'>
            <a href="/profile">
                <img src={profile} width="20px" height="20px"></img>
                <a className= {ProfileActiveClass} >Profile</a>
            </a>
            </div>
            <div onClick={logoutHandler} className='link logout'>
            <a>
                <img src={logout} width="20px" height="20px"></img>
                <a >Logout</a>
            </a>
            </div>
        </div>
    </div>
  )
}

export default SideNav