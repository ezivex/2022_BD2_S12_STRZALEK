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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>A</td>
          <td>Poniedziałek</td>
          <td>1234</td>
          <td>Jan Kowalski</td>
        </tr>
        <tr>
          <td>2</td>
          <td>B</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
        </tr>
        <tr>
          <td>3</td>
          <td>B</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
        </tr>
        <tr>
          <td>4</td>
          <td>C</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
        </tr>
        <tr>
          <td>5</td>
          <td>C</td>
          <td>Wtorek</td>
          <td>4321</td>
          <td>Anna Nowak</td>
        </tr>
        ...
      </tbody>
    </table>
  );
}




function DispatcherKursy() {
    return (
        
        <div className="mainContainer">

            <NavbarClean>
                <Link to="/DispatcherPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>
                </NavbarClean>
                <TimeAndDate/>
                <h2 className="nameFetchTitle">Podgląd kursów</h2>   
            <div className="mainDispKursy">
                <Table/>
            </div>
            <footer className="PageFooter">   
                <p>2022 BD2 Projekt</p>
            </footer>
        </div>

        
    );
}

export default DispatcherKursy;