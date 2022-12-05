import {Link } from "react-router-dom";
import React from "react";


const Navbar = () => {
    return ( 
    <nav className="Navbar">
        <div className="logoNav">
        <Link to="/">  <p>LOGO BUSY.PL</p></Link>
        </div>
        <div className="linksNav">
          <ul className="ulLinksNav">
           <li>
             <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ExamplePage">ExamplePage</Link>
            </li>
            <li>
             <Link to="/LoginPage">LoginPage</Link>
            </li>
          </ul>
        </div>
    </nav> );
}
 
export default Navbar;