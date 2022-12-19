import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';
import TableRealizacja from '../components/TableRealizacja';

function DispatcherKursy() {
    return (
        
        <div className="mainContainer">

            <NavbarClean>
                <Link to="/DispatcherPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
                </NavbarClean>
                <TimeAndDate/>
                <h2 className="nameFetchTitle">Podgląd kursów</h2>   
            <div className="mainDispKursy">
                <TableRealizacja/>
            </div>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default DispatcherKursy;