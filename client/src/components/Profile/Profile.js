import React from 'react'
import '../../assets/css/casesSection.css';
import '../../assets/css/profile.css';
import blankProfile from '../../assets/media/blank_profile.png';
import { useSelector } from 'react-redux';
const Profile = () => {

    const profileData = useSelector((state) => state.user.value);

  return (
    <div className='right'>
        <div className='top'>
            <h1>Profile</h1>
        </div>
        <div className='profile-pic-div'>
            <img src={blankProfile} width='150px'></img>
        </div>
        <div className='userinfo-div'>
            <div className='userinfo'>
                <div className='info'>
                    <p>Full Name: </p>
                    <p><b>&ensp;  {profileData.name}</b></p>
                </div>
                <div className='info'>
                    <p>Designation: </p>
                    <p><b>&ensp;{profileData.location} {profileData.type}</b></p>
                </div>
                <div className='info'>
                    <p>UID/Enrollment number: </p>
                    <p><b>&ensp;{profileData.uid}</b></p>
                </div>
                <div className='info'>
                    <p>No. Of Cases Assigned: </p>
                    <p><b>&ensp;{profileData.noOfCases}</b></p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Profile