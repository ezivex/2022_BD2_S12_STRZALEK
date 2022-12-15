import React,{ useEffect, useState } from "react";
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TableDelete from '../components/TableDelete';

function PanelAutobusy() {
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className="linkSettings">
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            <div className="mainPanels">
                <div className="listPanels">
                    <p className="listPanelsTitle">Autobusy</p>
                    <TableDelete/>
                </div>
            <div className="formPanels">

                <Link to="/PanelAutobusy2" className="linkSettings">
                    <button className="btnAddBus">dodaj autobus</button>
                </Link> 
            </div>
        </div>
        <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
    </div>
    );
}
export default PanelAutobusy;