import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const TableKursy = () => {
 
const [items, setKurs] = useState([]);
  
const deleteKurs = async id => {
    try {
      const deleteBus = await fetch(`http://localhost:5000/kurs/${id}`, {
        method: "DELETE"
      });

      setKurs(items.filter(item => item.id_kurs !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

const getKurs = async () => {
    try {
      const response = await fetch("http://localhost:5000/kurs");
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
          <th>Nazwa linii</th>
          <th>Rodzaj Autobusu</th>
          <th>Czas odjazdu</th>
          <th>Zarządzanie</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
          {items.map(item => (
            <tr key={item.id_kurs}>
              <td>{item.nazwalinii}</td>
              <td>{item.nazwarodzaj}</td>
              <td>{item.czas_odjazdu}</td>
              <td>
                <Link to={`/EditKurs?id=${item.id_kurs}`}>
                <button className='btnDel'>Edit</button>
                </Link>
              </td>
              <td>
                <button className='btnDel'
                  onClick={() => deleteKurs(item.id_kurs)}>
                  Delete
                </button>
              </td>
            </tr>
            ))}
        </tbody>

    </table>

  );
}
export default TableKursy;