import React, { useEffect, useState } from 'react';

import { Link,useLocation } from "react-router-dom";


const TableDriverGrafik = () => {
 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); 
  console.log("jes " + id);

const [items, setDostepnosc] = useState([]);
  
const deleteDostepnosc = async id => {
    try {
      const deleteDostepnosc = await fetch(`http://localhost:5000/dostepnosci_kierowcow/${id}`, {
        method: "DELETE"
      });
      setDostepnosc(items.filter(item => item.id_dostkier !== id));
    } catch (err) {
      console.error(err.message);
    }
};

const getDostepnosc = async () => {
    try {
      const response = await fetch("http://localhost:5000/dostepnosci_kierowcow");
      const jsonData = await response.json();

      setDostepnosc(jsonData.filter(item => item.imie === id));



      //setDostepnosc(items.filter(item => item.id_dostkier !== id));
    } catch (err) {
      console.error(err.message);
    }
};

useEffect(() => {
    getDostepnosc();
}, []);

return (

    <table className='tableData'>

    <thead>

      <tr>
        <th>Użytkownik</th>
        <th>Rodzaj zmiany</th>
        <th>Usuń dyspozycje</th>
      </tr>

    </thead>

    <tbody>

      {items.map(item => (
        <tr key={item.id_dostkier}>
          <td>{item.nazwisko} {item.imie}</td>
          <td>{item.rodzaj_zmiany}</td>
           <td>
            <button className='btnDel'
              onClick={() => deleteDostepnosc(item.id_dostkier)}
            >
              Usuń
            </button>
          </td> 
        </tr>
      ))}
      
    </tbody>

  </table>

  );
}
export default TableDriverGrafik;