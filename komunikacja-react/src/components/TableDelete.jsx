import React, { useEffect, useState } from 'react';

// BUSY!!!

const TableDelete = () => {
 
  const [items, setBus] = useState([]);
  
  const deleteBus = async id => {
    try {
      const deleteBus = await fetch(`http://localhost:5000/autobusy/${id}`, {
        method: "DELETE"
      });

      setBus(items.filter(item => item.id_bus !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBus = async () => {
    try {
      const response = await fetch("http://localhost:5000/autobusy");
      const jsonData = await response.json();

      setBus(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBus();
  }, []);

  return (
    <table className='tableData'>
    <thead>
      <tr>
        <th>Rejestracja</th>
        <th>Marka</th>
        <th>Rodzaj Autobusu</th>
        <th>Ostatni Przegląd</th>
        <th>Następny Przegląd</th>
        <th>Sprawność</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id_bus}>
          <td>{item.rejestracja}</td>
          <td>{item.marka}</td>
          <td>{item.nazwarodzaj}</td>
          <td>{item.ostatni_przeglad}</td>
          <td>{item.nastepny_przeglad}</td>
          <td>
          {(() => {
        if (item.sprawnosc === true) {
          return (<p>tak</p>)
        }else{
          return (<p>nie</p>)
        }
      })()}
          </td>
          <td>
            <button className='btnDel'
              onClick={() => deleteBus(item.id_bus)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}
export default TableDelete;