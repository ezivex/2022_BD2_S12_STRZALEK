import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TableCheckLinie from '../components/TableCheckLinie';

function CheckLinia() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
  const [linia, setLinia] = useState([]);
  const [przystanki, setPrzystanek] = useState([]);

    const getLinia = async () => {
        try {
          const response = await fetch(`http://localhost:5000/linia/${idk}`);
          const jsonData = await response.json();
          setLinia(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
      // const getPrzystanek = async () => {
      //   try {
      //     const response = await fetch("http://localhost:5000/przystanki");
      //     const jsonData = await response.json();
      //     setPrzystanek(jsonData);
      //   } catch (err) {
      //     console.error(err.message);
      //   }
      // };
    
      useEffect(() => {
        //getPrzystanek();
        getLinia();
      }, []);

let LiniaData = [];
const getLiniaData = async () => {
  let result = linia;
  //console.log("siema");
  //console.log(result);
  result.map((linia) => {
    LiniaData = linia.nazwalinii;
  });
  //console.log("siema2");
  //console.log(LiniaData);
};
getLiniaData();


  return (

    <div className="mainContainer">

      <NavbarClean><Link to="/" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>


      <div className="nameFetchTitle"><p>Numer Linii {idk}</p><p>Nazwa linii: {LiniaData}</p></div>

      <div className="mainPanels"><div className="listPanels"><TableCheckLinie/></div></div>

      <footer className="PageFooter"> <p>2022 BD2 Projekt</p></footer>
    
    </div>

  );

}
export default CheckLinia;