import React from 'react'
import '../../assets/css/dashboard.css';
import logo from '../../assets/media/logo.png';
import dashboard from '../../assets/media/dashboard.png';
import cases from '../../assets/media/cases.png';
import calendar from '../../assets/media/calendar.png';
import tracker from '../../assets/media/tracker.png';
import courts from '../../assets/media/courts.png';
import profile from '../../assets/media/profile.png';
import logout from '../../assets/media/logout.png';

const SideNav = () => {

    const btnStyle = {
        color: "#E1C7AA"
    }

  return (
    <div className='sidenav'>
        <div className='logosection'>
            <img src={logo}></img>
        </div>
        <div className='linkssection'>
            <div className='link'>
                <img src={dashboard} width="20px" height="20px"></img>
                <a style={btnStyle}>Dashboard</a>
            </div>
            <div className='link'>
                <img src={cases} width="20px" height="20px"></img>
                <a>Cases</a>
            </div>
            <div className='link'>
                <img src={calendar} width="20px" height="20px"></img>
                <a>Calendar</a>
            </div>
            <div className='link'>
                <img src={tracker} width="20px" height="20px"></img>
                <a>Tracker</a>
            </div>
            <div className='link'>
                <img src={courts} width="20px" height="20px"></img>
                <a>Courts</a>
            </div>
            <div className='link'>
                <img src={profile} width="20px" height="20px"></img>
                <a>Profile</a>
            </div>
            <div className='link'>
                <img src={logout} width="20px" height="20px"></img>
                <a>Logout</a>
            </div>
        </div>
    </div>
  )
}

export default SideNav