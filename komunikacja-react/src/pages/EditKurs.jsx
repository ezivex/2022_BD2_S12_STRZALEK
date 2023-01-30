import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TableEditKursy from '../components/TableEditKursy';

function EditKurs() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
  const [linia, setLinia] = useState([]);
  const [przystanki, setPrzystanek] = useState([]);

    const getLinia = async () => {
        try {
          const response = await fetch(`http://localhost:5000/kurs/${idk}`);
          const jsonData = await response.json();
          setLinia(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
      const getPrzystanek = async () => {
        try {
          const response = await fetch("http://localhost:5000/przystanki");
          const jsonData = await response.json();
          setPrzystanek(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getPrzystanek();
        getLinia();
      }, []);

let LiniaData = [];
let LiniaDatagodz = [];

const getLiniaData = async () => {
  let result = linia;
  result.map((linia) => {
    LiniaData = linia.nazwalinii;
  });
};const getLiniaDatagodz = async () => {
  let result = linia;
  result.map((linia) => {
    LiniaDatagodz = linia.czas_odjazdu;
  });
};

getLiniaData();
getLiniaDatagodz();

  return (

    <div className="mainContainer">

      <NavbarClean><Link to="/PanelKursy" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>

      <div className="nameFetchTitle"><p>Kurs {idk}</p><p>Nazwa linii: {LiniaData}</p><p>Godzina odjazdu(z bazy):{LiniaDatagodz}</p></div>

      <div className="mainPanels"><div className="listPanels"><TableEditKursy/></div></div>

      <footer className="PageFooter"> <p>2022 BD2 Projekt</p></footer>
    
    </div>

  );

}
export default EditKurs;