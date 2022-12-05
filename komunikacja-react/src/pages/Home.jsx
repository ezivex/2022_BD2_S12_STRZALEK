
import  {Link } from "react-router-dom";
import Navbar from "../Navbar";
function Home() {
    return (
        <div className='HomeContainer'>
            <Navbar/>
            <div className="HomeTop"></div>
            <div className="HomeButtons">
            <Link to="/PrzystankiPage">
                <button className="btn_przystanki"></button>
             </Link>
             <Link to="/LiniePage">
                <button className="btn_linie"></button>
            </Link>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}

export default Home;