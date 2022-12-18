import React from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import ListDataShowLinie from '../components/ListDataShowLinie';
function ShowLinie() {
    return (
        <div className="mainContainer">
            <NavbarClean>
            <Link to="/" className='linkSettings'>
                <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>
            <h2 className="listPanelsTitle">Nasze Linie</h2>
                <ListDataShowLinie/>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
 </div>
    
);
}

export default ShowLinie;