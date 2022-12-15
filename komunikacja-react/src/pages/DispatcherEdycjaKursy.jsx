import React from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TimeAndDate from '../TimeAndDate';

const Table = () => {
  return (
    <table className='tableDyspozytor'>
      <thead>
        <tr>
          <th>Linia</th>
          <th>Kurs</th>
          <th>Dzień</th>
          <th>Autobus</th>
          <th>Kierowca</th>
          <th>Akcja</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>A</td>
          <td>Poniedziałek</td>
          <td>1234</td>
          <td>Jan Kowalski</td>
          <td><button type="submit">DELETE</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>B</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
          <td><button type="submit">DELETE</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>B</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
          <td><button type="submit">DELETE</button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>C</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
          <td><button type="submit">DELETE</button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>C</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
          <td><button type="submit">DELETE</button></td>
        </tr>
        ...
      </tbody>
    </table>
  );
}




function DispatcherEdycjaKursy() {
    return (
        
        <div className="mainContainer">

            <NavbarClean>
                <Link to="/DispatcherPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
                </NavbarClean>
                <TimeAndDate/>
                <h2 className="nameFetchTitle">Zarządzanie kursami</h2>   
            <div className="mainDispKursy">
                <Table/>
            </div>
            <div className="formPanels">
            <h2 className='AddTitle'>Dodaj kurs</h2>
                <form className='loging kursModifier'>
                        <div className="input-container">
                            <label>Nazwa Linii </label>
                            <input type="text" name="nazwaLinii" required />
                        </div>
                        <div className="input-container">
                            <label>Kurs </label>
                            <input type="text" name="kurs" required />
                        </div>
                        <div className="input-container">
                            <label>Dzień </label>
                            <input type="text" name="dzien" required />
                        </div>
                        <div className="input-container">
                            <label>Autobus </label>
                            <input type="text" name="autobus" required />
                        </div>
                        <div className="input-container">
                            <label>Kierowca </label>
                            <input type="text" name="kierowca" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj" />
                        </div>
                    </form>
                </div>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default DispatcherEdycjaKursy;