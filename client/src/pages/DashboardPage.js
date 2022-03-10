import React from 'react'
import SideNav from '../components/Dashboard/SideNav'
import '../assets/css/dashboard.css';
import Dashboard from '../components/Dashboard/Dasboard';
import Cases from '../components/Dashboard/Cases';

const DashboardPage = () => {
  return (
    <div className='dashboard'>
        <SideNav></SideNav>
        <Dashboard/>
        {/* <Cases/> */}
    </div>
  )
}

export default DashboardPage