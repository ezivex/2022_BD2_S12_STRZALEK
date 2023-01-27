import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TablePrzystankiwLini from '../components/TablePrzystankiwLini';
import CreatableSelect from "react-select/creatable";

function EditLinia() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
  const [linia2, setLinia2] = useState([]);
  const [linia, setLinia] = useState(idk);

  const [przstanek, setPrzystanek] = useState([]);

  const getLinia2 = async () => {
      try 
      {
        const response = await fetch(`http://localhost:5000/linia/${idk}`);
        const jsonData = await response.json();
        setLinia2(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
  const getPrzystanek = async () => {
      try 
      {
        const response = await fetch("http://localhost:5000/przystanki");
        const jsonData = await response.json();
        setPrzystanek(jsonData);
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

  let PrzystankiData = [];
  const getPrzystankiData = async () => {
    let result = przstanek;
    result.map((dataPrzystanek) => {
      return PrzystankiData.push({value: dataPrzystanek.id_przystanku, label: dataPrzystanek.nazwaprzystanku});
    });
  };
  getPrzystankiData();

  const handleChange = (selectedOption) => {  
        SetPrzystanek_id(selectedOption.value);
        return selectedOption.value;
  };

// ----------------------------------------------
const [przystanek_id, SetPrzystanek_id] = useState("");

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

        <NavbarClean><Link to="/PanelLinia" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>

        <div className="nameFetchTitle"><p>Linia: {linia2.nazwalinii}</p></div>

        <div className="mainPanels">

            <div className="formPanels">

              <form className='loging' onSubmit={onSubmitForm}>

                  <div className="input-container">
                    <label>Identyfikator przystanku </label>
                    <CreatableSelect options={PrzystankiData} defaultOptions onChange={handleChange} />
                    <input type="number" name="nazwaprzystanku" onChange={e => SetPrzystanek_id(e.target.selectedOption.value) } hidden />
                    <input type="text" name="linia" onChange={e => setLinia(e.target.value)} hidden />
                  </div>

                <div className="button-container"><input type="submit" value="Dodaj przystanek dla linii" /></div>

              </form>

            </div>

            <div className="listPanels"><TablePrzystankiwLini/></div>

        </div>

        <footer className="PageFooter"><p>2022 BD2 Projekt</p></footer>

    </div>

  );
}
export default EditLinia;