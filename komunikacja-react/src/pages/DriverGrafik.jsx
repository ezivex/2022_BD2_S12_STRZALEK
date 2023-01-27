import React from 'react';
import { Link } from "react-router-dom";
import TableDriverGrafik from '../components/TableDriverGrafik';
import NavbarClean from '../components/NavbarClean';
import TimeAndDate from '../components/TimeAndDate';

function DriverGrafik() {
    return (

    <div className="containerGrafik">
            
        <NavbarClean><Link to="/DriverPanel" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>
            
        <TimeAndDate/>
            
        <h2 className="nameFetchTitle">Grafik</h2>     

        <div className="mainPanels"><TableDriverGrafik/></div>

        <footer className="PageFooter buttonSettings"><p>2022 BD2 Projekt</p></footer>
     </div>  

    );
}
export default DriverGrafik;