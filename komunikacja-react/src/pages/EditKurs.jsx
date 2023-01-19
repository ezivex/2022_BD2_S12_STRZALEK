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

//====
const testyy2 = [];
const getData = async () => {
  let result = items;
result.map((user) => {
  return testyy2.push({value: user.id_przystanku, label: user.nazwaprzystanku});
});
};
getData();
console.log("testyy2");
console.log(testyy2);
const options = [];
  
 const xd = () => {
  console.log("zapisywanie do options");
  items.forEach((element) => {
    console.log(element.id_przystanku);
    console.log(typeof element.id_przystanku);
    //testyy = `${element.nazwalinii}`;
    console.log(typeof '${element.nazwalinii}');
    options.push({
        value: element.id_przystanku,
        label: `${element.nazwaprzystanku}`,
    });
    console.log(options);
    console.log(options[0]);
    //return options;
  });

 };
const handleChange = (selectedOption) => {
//xd();
console.log(selectedOption.value);
SetPrzystanek_id(selectedOption.value);
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
