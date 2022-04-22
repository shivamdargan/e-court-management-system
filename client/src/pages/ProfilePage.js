import React from 'react'
import Profile from '.././components/Profile/Profile.js';
import SideNav from '../components/Dashboard/SideNav.js';
import Navbar2 from '../components/Navbar2.js';

const ProfilePage = () => {
  return (
    <div className="dashboard">
            <SideNav section="profile"/>
            <Profile/>
    </div>
  )
}

export default ProfilePage