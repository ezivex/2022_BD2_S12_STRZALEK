import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {

    return ( 
      <nav className="Navbar">

          <div className="logoNavbar"><Link to="/">  <p>LOGO BUSY.PL</p></Link></div>

          <div className="linksNavbar">

              <ul className="ulLinksNavbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/HelpPage">Pomoc</Link></li>
                <li><Link to="/TimeTablePage">Rozklad</Link></li>
                <li><Link to="/LoginPage">Logowanie</Link></li>
              </ul>

        </div>

    </nav>
  );
}
export default Navbar;