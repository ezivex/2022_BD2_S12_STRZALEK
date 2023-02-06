import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className="HomeContainer">
            <Navbar/>

            <div className="HomeButtons">
                <Link to="/ShowPrzystanki"><button className="btn_przystanki">Przystanki</button></Link>
                <Link to="/ShowLinie"><button className="btn_linie">Linie</button></Link>
            </div>

            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
            
        </div>
    );
}
export default Home;