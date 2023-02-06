import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TableCheckPrzystanki from '../components/TableCheckPrzystanki';

function CheckPrzystanki() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
  const [linia, setLinia] = useState([]);
  const [przystanki, setPrzystanek] = useState([]);


  const [items, setLinia2] = useState([]);
  const [zmienna, setPgetPrzystanekwLinii] = useState(idk);
  const getLinia2 = async () => {
    try {
      const response = await fetch("http://localhost:5000/przystanki");
      const jsonData = await response.json();
      const xd = parseInt(zmienna);
      setLinia2(jsonData.filter(item => item.id_przystanku === xd));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLinia2();
  }, []);

    const getLinia = async () => {
        try {
          const response = await fetch(`http://localhost:5000/przystanki/${idk}`);
          const jsonData = await response.json();
          setLinia(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
      
      useEffect(() => {
        getLinia();
      }, []);

      const LiniaData = [];
      const moja = async () => {
        let result = items;
        result.map((el) => {
          console.log("lolololol");
          console.log(el.nazwaprzystanku);
          console.log("lolololol");
          //LiniaData = linia.nazwalinii;
          //LiniaData.push({value: el.id_linii, label: el.nazwalinii});
          LiniaData.push(el.nazwaprzystanku);
          console.log(el);
        });
      };
      moja();


  return (

    <div className="mainContainer">

      <NavbarClean><Link to="/ShowPrzystanki" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>


      <div className="nameFetchTitle"><p>Nazwa przystanku: {LiniaData}</p></div>

      <div className="mainPanels"><div className="listPanels"><TableCheckPrzystanki/></div></div>

      <footer className="PageFooter"> <p>2022 BD2 Projekt</p></footer>
    
    </div>

  );

}
export default CheckPrzystanki;