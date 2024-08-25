import React from 'react';
import { Row, Stack } from 'react-bootstrap';
import { FaCalendar, FaDownload, FaRunning, FaSave, FaUpload, FaWindowClose } from 'react-icons/fa';
import AccordionItem from '../iterations/AccordionItem.js';

const SideBarLayout = ({workFlowSteps = [], loading, error}) => {
  return (
    <Row className="flex-column" id='sideBar-layout'>
      <Row id='sideBar-design'>
        <Stack direction="horizontal" gap={0}>
        <div style={{paddingTop: '0.5em'}}><h4 style={{color: "#8192a3"}}>Workflow</h4></div>
        <div className="ms-auto">
        <FaWindowClose className="sideBar-icon"/>
        <FaDownload className="sideBar-icon"/>
        <FaUpload className="sideBar-icon"/>
        <FaSave className="sideBar-icon"/>
        <FaRunning className="sideBar-icon"/>
        <FaCalendar className="sideBar-icon"/>
        </div>
        </Stack>
      </Row>
      <hr></hr>
      <Row style={{margin: '0'}}>
        {!loading ? (!error ? workFlowSteps.map((item, index) => (
          <AccordionItem key={index} value={item} />
        )): <h5>{error}</h5>): (<Row>Loading...</Row>)}
      </Row>
    </Row>
  );
};

export default SideBarLayout;
