import React from 'react'
import SideNav from '../components/Dashboard/SideNav'
import '../assets/css/dashboard.css';
import Dashboard from '../components/Dashboard/Dasboard';

const DashboardPage = () => {
  return (
    <div className='dashboard'>
        <SideNav section = "dashboard" ></SideNav>
        <Dashboard/>
    </div>
  )
}

export default DashboardPage