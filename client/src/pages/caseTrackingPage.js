import React from 'react'
import SideNav from '../components/Dashboard/SideNav'
import CaseTracker from '../components/CaseTracker/CaseTracker'
import '../assets/css/tracker.css';

const CaseTrackPage = () => {
  return (
    <div className='caseTracker'>
        <SideNav section = "tracker" ></SideNav>
        <CaseTracker/>
    </div>
  )
}

export default CaseTrackPage