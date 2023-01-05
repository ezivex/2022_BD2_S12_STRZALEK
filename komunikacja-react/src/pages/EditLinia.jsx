import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import TablePrzystankiwLini from '../components/TablePrzystankiwLini';
//const EditLinia = () => {
function EditLinia() {
  

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
  const [linia2, setLinia2] = useState([]);
  const [linia, setLinia] = useState(idk);
    console.log("siema");
    console.log(idk);

    const getLinia2 = async () => {
        try {
          const response = await fetch(`http://localhost:5000/linia/${idk}`);
          const jsonData = await response.json();
    
          setLinia2(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getLinia2();
      }, []);


// ----------------------------------------------
const [przystanek_id, SetPrzystanek_id] = useState("");
//const [linia, SetLinia_id] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { linia, przystanek_id};
      const response = await fetch("http://localhost:5000/przystanekwLinii", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.reload(false);
      //window.location = "/PanelAutobusy";
    } catch (err) {
      console.error(err.message);
    }
  };
//  ---------------------------------------------------
  return (

<div className="mainContainer">

<NavbarClean>
    <Link to="/PanelLinia" className='linkSettings'>
        <button className="btnBack"> POWRÓT </button>
    </Link>
</NavbarClean>


{/* <div>
      <h1>Edit Linia</h1>
      <p>Nazwa Linii: {linia.nazwalinii}</p>
      <p> Typ Linii: {linia.typ_linii}</p>
    </div> */}


<div className="nameFetchTitle">
    <p>Linia: {linia2.nazwalinii}</p>
</div>

<div className="mainPanels">
    <div className="formPanels">
        <form className='loging' onSubmit={onSubmitForm}>
            <div className="input-container">
                <label>Identyfikator przystanku </label>
                <input type="text" name="linia" onChange={e => setLinia(e.target.value)} hidden />
                <input type="number" name="przystanek_id" onChange={e => SetPrzystanek_id(e.target.value)} required />
            </div>
            <div className="button-container">
                <input type="submit" value="Dodaj przystanek dla linii" />
            </div>
        </form>
    </div>
    <div className="listPanels">
       <TablePrzystankiwLini/>
    </div>
</div>

<footer className="PageFooter"> 
    <p>2022 BD2 Projekt</p>
</footer>

</div>
  );
}

export default EditLinia;
