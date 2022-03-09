import React from 'react'
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <div>
        <div className='nav-main'>
            <div className='nav-links'>
                <a>About</a>
                <a>Cases</a>
                <a>Courts</a>
                <a href='/login'>Login</a>
                <a href='/signup' className='signup-btn'>Signup</a>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar