import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TableKursy from '../components/TableKursy';
function PanelKursy() {

// ----------------------------------------------
const [nazwalini_k, setNazwalini_k] = useState("");
const [rbus_k, setRbus_k] = useState("");
const [czas_odjazdu, setCzas_odjazdu] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nazwalini_k,rbus_k,czas_odjazdu };
      const response = await fetch("http://localhost:5000/kurs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
  };
//  ---------------------------------------------------



    return (
        <div className="containerGrafik">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                    </Link>
                </NavbarClean>
            <div className="mainPanels KursyModif">
               <TableKursy/>
                <div className="formPanels">
                <form className='loging kursyForm' onSubmit={onSubmitForm}>
                    <h2 className='kursyFormTitle'>Dodaj Kurs</h2>
                        <div className="input-container">
                            <label>Nazwa linii </label>
                            <input type="number" name="nazwaLinii" onChange={e => setNazwalini_k(e.target.value) }required />
                        </div>
                        <div className="input-container">
                            <label>Rodzaj autobusu </label>
                            <input type="number" name="rodzajAutobusu" onChange={e => setRbus_k(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Czas odjazdu </label>
                            <input type="number" name="czasOdjazdu" onChange={e => setCzas_odjazdu(e.target.value) }required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj" />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}
export default PanelKursy;