import React from 'react';
import { Link } from "react-router-dom";
import HelpDropdownList from '../components/HelpDropdownList';
import NavbarClean from '../NavbarClean';


function HelpPage() {
    return (
        
        <div className="helpContainer">

            <NavbarClean>
                <Link to="/Home" className="linkSettings">
                    <button className="btnBack"> POWRÓT </button>
                </Link>
            </NavbarClean>

            <div className="dropdownHolder">
            <HelpDropdownList/>
            </div>

            <footer className="PageFooter btn_footer">
                <p>2022 BD2 Projekt</p>   
            </footer> 

        </div>
    );
}

export default HelpPage;
