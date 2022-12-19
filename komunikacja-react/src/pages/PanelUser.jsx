import React,{ useEffect, useState } from "react";
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TableUser from '../components/TableUser';

function PanelUser() {
    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className="linkSettings">
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            <div className="mainPanels AutobusyModif">
                <div className="listPanels">
                    <p className="listPanelsTitle">Użytkownicy</p>
                    <TableUser/>
                </div>
            <div className="formPanels AutModif">

                <Link to="/PanelUser2" className="linkSettings">
                    <button className="btnAddBus">dodaj użytkownika</button>
                </Link> 
            </div>
        </div>
        <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
    </div>
    );
}
export default PanelUser;