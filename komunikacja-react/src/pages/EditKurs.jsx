import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TableEditKursy from '../components/TableEditKursy';


import CreatableSelect from "react-select/creatable";
//const EditLinia = () => {
function EditKurs() {
  

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id_param = queryParams.get('id');
  const [linia2, setLinia2] = useState([]);
  const [linia, setLinia] = useState(id_param);

  const [items, setPrzystanek] = useState([]);

    console.log("siema");
    console.log(id_param);

    const getLinia2 = async () => {
        try {
          const response = await fetch(`http://localhost:5000/linia/${id_param}`);
          const jsonData = await response.json();
    
          setLinia2(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
      const getPrzystanek = async () => {
        try {
          const response = await fetch("http://localhost:5000/przystanki");
          const jsonData = await response.json();
    
          setPrzystanek(jsonData);
          //setPrzystanek(jsonData.filter(jsonData => jsonData.linia === xd));
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getPrzystanek();
      }, []);

      useEffect(() => {
        getLinia2();
      }, []);


//===============  
// ----------------------------------------------


//  ---------------------------------------------------
  return (

<div className="mainContainer">

<NavbarClean>
    <Link to="/PanelLinia" className='linkSettings'>
        <button className="btnBack"> POWRÓT </button>
    </Link>
</NavbarClean>

<div className="nameFetchTitle">
    <p>Kurs: {linia2.nazwalinii}</p>
</div>

<div className="mainPanels">
    <div className="listPanels">
       <TableEditKursy/>
    </div>
</div>

<footer className="PageFooter"> 
    <p>2022 BD2 Projekt</p>
</footer>

</div>
  );
}

export default EditKurs;
