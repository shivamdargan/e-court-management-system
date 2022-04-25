// import React from "react";
import CasesSection from "../components/Dashboard/CasesSection";
import SideNav from "../components/Dashboard/SideNav";
import '../assets/css/dashboard.css';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button'
import ScheduleModal from '../components/Schedule/ScheduleModal.js';
import '../assets/css/schedule.css';
import { useState } from "react";

const CasePage=() =>{
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="dashboard">
            <SideNav section = "case"/>
            <CasesSection onHide={() => setModalShow(true)}/>
            <div className="">
            <ScheduleModal show={modalShow} onHide={() => setModalShow(false)}/>
            </div>
        </div>
    );
}

export default CasePage;