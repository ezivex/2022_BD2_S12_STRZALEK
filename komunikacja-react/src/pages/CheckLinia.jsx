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

  const [items, setLinia2] = useState([]);
  const [zmienna, setPgetPrzystanekwLinii] = useState(idk);
  const getLinia2 = async () => {
    try {
      const response = await fetch("http://localhost:5000/linia");
      const jsonData = await response.json();
      const xd = parseInt(zmienna);
      setLinia2(jsonData.filter(item => item.id_linii === xd));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLinia2();
  }, []);
  console.log(items);
    const getLinia = async () => {
        try {
          const response = await fetch(`http://localhost:5000/linia/${idk}`);
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
    console.log(el.nazwalinii);
    console.log("lolololol");
    //LiniaData = linia.nazwalinii;
    //LiniaData.push({value: el.id_linii, label: el.nazwalinii});
    LiniaData.push(el.nazwalinii);
    console.log(el);
  });
};
moja();
console.log("hehe:")
console.log(LiniaData);
const xddd = 4;
  return (

    <div className="mainContainer">

      <NavbarClean><Link to="/ShowLinie" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>


      
            


      <div className="nameFetchTitle"><p>Nazwa linii: {LiniaData}</p></div>

      <div className="mainPanels"><div className="listPanels"><TableCheckLinie/></div></div>

      <footer className="PageFooter"> <p>2022 BD2 Projekt</p></footer>
    
    </div>

  );

}
export default CheckLinia;