import {Link } from "react-router-dom";
import React from "react";


const Navbar = () => {
    return ( 
    <nav className="Navbar">
        <div className="logo">
            <p>LOGO BUSY.PL</p>
        </div>
        <div className="links">
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ExamplePage">ExamplePage</Link>
        </li>
        <li>
          <Link to="/BusDriverMainPage">BusDriverMainPage</Link>
        </li>

        <li>
          <Link to="/BusDriverDyspocyzja">BusDriverDyspozycja</Link>
        </li>
        
        <li>
          <Link to="/BusDriverGrafik">BusDriverGrafik</Link>
        </li>

        <li>
          <Link to="/DispatcherPanel">DispatcherPanel</Link>
       </li>
       <li>
          <Link to="/AdminPanel">AdminPanel</Link>
       </li>
      </ul>
        </div>
    </nav> );
}
 
export default Navbar;