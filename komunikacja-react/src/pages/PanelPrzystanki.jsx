import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TablePrzystanki from '../components/TablePrzystanki';

function PanelPrzystanki() {

// ----------------------------------------------
const [nazwaprzystanku, SetNazwaprzystanku] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nazwaprzystanku};
      const response = await fetch("http://localhost:5000/przystanki", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
        <div className="mainContainer">

            <NavbarClean><Link to="/AdminPanel" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>
            
            <div className="mainPanels KursyModif">
                <TablePrzystanki/>

                <div className="formPanels">

                    <form className='loging kursyForm' onSubmit={onSubmitForm}>

                        <div className="input-container">
                            <label>Nazwa Przystanku </label>
                            <input type="text" name="nazwaPrzystanku" onChange={e => SetNazwaprzystanku(e.target.value)} required />
                        </div>

                        <div className="button-container"><input type="submit" value="Dodaj przystanek" /></div>

                    </form>

                </div>

            </div>

        <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>

        </div>
    );
}
export default PanelPrzystanki;