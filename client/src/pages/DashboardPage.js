import React from 'react'
import SideNav from '../components/Dashboard/SideNav'
import '../assets/css/dashboard.css';

const DashboardPage = () => {
  return (
    <div className='dashboard'>
        <SideNav></SideNav>
        <div className='dashboard-right'>

        </div>
    </div>
  )
}

export default DashboardPage