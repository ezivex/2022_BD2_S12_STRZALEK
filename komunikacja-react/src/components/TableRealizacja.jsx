import React, { useEffect, useState } from 'react';

const TableRealizacja = () => {
 
const [items, setKurs] = useState([]);
  
const deleteKurs = async id => {
    try {
      const deleteBus = await fetch(`http://localhost:5000/kurs_realizacja/${id}`, {
        method: "DELETE"
      });

      setKurs(items.filter(item => item.id_realizacji !== id));
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
};

const getKurs = async () => {
    try {
      const response = await fetch("http://localhost:5000/kurs_realizacja");
      const jsonData = await response.json();

      setKurs(jsonData);
    } catch (err) {
      console.error(err.message);
    }
};

useEffect(() => {
    getKurs();
}, []);

  return (

    <table className='tableData kursyMod'>

      <thead>

        <tr>
          <th>Kurs</th>
          {/* <th>Dzień realizacji</th> */}
          <th>Kierowca</th>
          <th>Autobus</th>
          {/* <th>Edycja</th> */}
          <th>Delete</th>
        </tr>

      </thead>

      <tbody>

          {items.map(item => (
            <tr key={item.id_realizacji}>
              <td>{item.id_kursu + ". " + item.nazwalinii + " (" + item.czas_odjazdu + ")"}</td>
              {/* <td>{item.dzien}</td> */}
              <td>{item.imie + " " + item.nazwisko}</td>
              <td>{item.marka + " (" + item.rejestracja + ")"}</td>
              <td>
              <button className='btnDel'onClick={() => deleteKurs(item.id_realizacji)}>
                  Delete
              </button>
              </td>
            </tr>
          ))}

      </tbody>
    
    </table>

  );
}
export default TableRealizacja;