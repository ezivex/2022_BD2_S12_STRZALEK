import { Link } from "react-router-dom";
import React from "react";

const NavbarClean = (props) => {

    return ( 

        <nav className="Navbar">

            <div className="logoNavbar"><Link to="/">  <p>LOGO BUSY.PL</p></Link></div>

            <div className="btnPlacement">{props.children}</div>

        </nav> 
    );
}
export default NavbarClean;