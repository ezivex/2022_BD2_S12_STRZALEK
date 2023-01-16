import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import NavbarClean from '../NavbarClean';
import ListDataShowLinie from '../components/ListDataShowLinie';
import TableLinie from '../components/TableLinie';

import CreatableSelect from "react-select/creatable";





function PanelLinia() {

// ----------------------------------------------
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
  const [items, setLinia] = useState([]);
  const gettyp_linii = async () => {
    try {
      const response = await fetch("http://localhost:5000/typ_linii");
      const jsonData = await response.json();

      setLinia(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gettyp_linii();
  }, []);
//====
const testyy2 = [];
const getData = async () => {
  let result = items;
result.map((user) => {
  return testyy2.push({value: user.id_typ_linii, label: user.nazwa_typu});
});
};
getData();
console.log("testyy2");
console.log(testyy2);
const options = [];
  
 const xd = () => {
  console.log("zapisywanie do options");
  items.forEach((element) => {
    console.log(element.id_typ_linii);
    console.log(typeof element.id_typ_linii);
    //testyy = `${element.nazwalinii}`;
    console.log(typeof '${element.nazwa_typu}');
    options.push({
        value: element.id_typ_linii,
        label: `${element.nazwa_typu}`,
    });
    console.log(options);
    console.log(options[0]);
    //return options;
  });

 };
const handleChange = (selectedOption) => {
//xd();
console.log(selectedOption.value);
setTyp_linii(selectedOption.value);
return selectedOption.value;
};
const loadOptions = (searchValue, callback) => {
xd();
setTimeout(() => {
    console.log("loadOptions");
    console.log(options);
    console.log(testyy2);

    const filteredOptions = options.filter(option => option.label.includes(searchValue))
    callback(filteredOptions);
})
}
//===============  


//  ---------------------------------------------------



    return (
        <div className="mainContainer">
            <NavbarClean>
                <Link to="/AdminPanel" className='linkSettings'>
                    <button className="btnBack"> POWRÓT </button>
                </Link>

                
            </NavbarClean>

            <div className="mainPanel">
                <div className="formPanels">
                    <form className='loging formStyle' onSubmit={onSubmitForm}>
                        <div className="input-container">
                            <label>Nazwa Linii </label>
                            <input type="text" name="nazwalinii" onChange={e => SetNazwalinii(e.target.value) } required />
                        </div>
                        <div className="input-container">
                            <label>Typ Linii </label>
                            <CreatableSelect options={testyy2} defaultOptions onChange={handleChange} />
                             <input type="number" name="nazwa_typu" onChange={e => setTyp_linii(e.target.selectedOption.value) } hidden />

                            {/* <input type="number" name="typ_linii" onChange={e => setTyp_linii(e.target.value) } required /> */}
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Dodaj" />
                        </div>
                    </form>
        
                </div>

                <div className="listPanels">
                    <p className="listPanelsTitle">Linie</p>
                           <TableLinie/>
                </div>
            </div>

            <footer className="PageFooter"> 
                <p>2022 BD2 Projekt</p>
                
            </footer>
            
        </div>
    );
}

export default PanelLinia;