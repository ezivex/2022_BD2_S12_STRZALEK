import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavbarClean from '../components/NavbarClean';
import TableLinie from '../components/TableLinie';
import CreatableSelect from "react-select/creatable";

function PanelLinia() {

const [nazwalinii, SetNazwalinii] = useState("");
const [typ_linii, setTyp_linii] = useState("");

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nazwalinii, typ_linii };
      const response = await fetch("http://localhost:5000/linia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
  };

//----select
  const [typLinii, setTypLinii] = useState([]);
  const getTypLinii = async () => {
    try {
      const response = await fetch("http://localhost:5000/typ_linii");
      const jsonData = await response.json();
      setTypLinii(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTypLinii();
  }, []);

//====
let typLiniiData = [];
const getTypLiniiData = async () => {
  let result = typLinii;
  result.map((typLini) => {
    return typLiniiData.push({value: typLini.id_typ_linii, label: typLini.nazwa_typu});
  });
};
getTypLiniiData();

const handleChangeTypLinii = (selectedOption) => {
    return selectedOption.value;
};

    return (
      <div className="mainContainer">

          <NavbarClean><Link to="/AdminPanel" className='linkSettings'><button className="btnBack"> POWRÓT </button></Link></NavbarClean>

          <div className="mainPanel">

              <div className="formPanels">
                    
                  <form className='loging formStyle' onSubmit={onSubmitForm}>

                      <div className="input-container">
                          <label>Nazwa Linii </label>
                          <input type="text" name="nazwalinii" onChange={e => SetNazwalinii(e.target.value) } required />
                      </div>

                      <div className="input-container">
                          <label>Typ Linii </label>
                          <CreatableSelect options={typLiniiData} defaultOptions onChange={handleChangeTypLinii} />
                          <input type="number" name="nazwa_typu" onChange={e => setTyp_linii(e.target.selectedOption.value) } hidden />
                      </div>

                      <div className="button-container"><input type="submit" value="Dodaj" /></div>

                  </form>
        
                </div>

                <div className="listPanels"><p className="listPanelsTitle">Linie</p><TableLinie/></div>

          </div>

          <footer className="PageFooter"> <p>2022 BD2 Projekt</p></footer>
            
      </div>
  );
}
export default PanelLinia;