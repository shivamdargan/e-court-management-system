import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/landing.css';
import LandingContent from '../components/Landing/LandingContent';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className='landing-img'>
        <Navbar/>
        <LandingContent/>
        <Stats/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Landing