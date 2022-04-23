import React from 'react'
import '../../assets/css/casesSection.css';
import '../../assets/css/profile.css';
import blankProfile from '../../assets/media/blank_profile.png';

const Profile = () => {
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
                    <p><b>Barinder Singh Ramana</b></p>
                </div>
                <div className='info'>
                    <p>Designation: </p>
                    <p><b>Haryana High court Judge</b></p>
                </div>
                <div className='info'>
                    <p>UID/Enrollment number: </p>
                    <p><b>--------------------------</b></p>
                </div>
                <div className='info'>
                    <p>No. of cases solved: </p>
                    <p><b>10</b></p>
                </div>
                <div className='info'>
                    <p>No. of on-going cases: </p>
                    <p><b>2</b></p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Profile