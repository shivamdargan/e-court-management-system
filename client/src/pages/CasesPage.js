import React from "react";
import CasesSection from "../components/Dashboard/CasesSection";
import SideNav from "../components/Dashboard/SideNav";
import '../assets/css/dashboard.css';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button'
import ScheduleModal from '../components/Schedule/ScheduleModal.js';
import '../assets/css/schedule.css';

const CasePage=() =>{
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="dashboard">
            <SideNav section = "case"/>
            <CasesSection/>
            <div className="modal">
            <ScheduleModal show={modalShow} onHide={() => setModalShow(true)}/>
            </div>
        </div>
    );
}

export default CasePage;