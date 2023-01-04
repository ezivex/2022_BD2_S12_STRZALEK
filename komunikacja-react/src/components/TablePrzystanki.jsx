import React, { useEffect, useState } from 'react';

const TablePrzystanki = () => {
 
  const [items, setPrzystanek] = useState([]);
  
  const deletePrzystanek = async id => {
    try {
      const deletPrzystanek = await fetch(`http://localhost:5000/przystanki/${id}`, {
        method: "DELETE"
      });

      setPrzystanek(items.filter(item => item.id_przystanku !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPrzystanek = async () => {
    try {
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

  return (
    <table className='tableData '>
    <thead>
      <tr>
        {/* <th>Lp.</th> */}
        <th>Nazwa przystanku</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id_przystanku}>
          {/* <td>{item.id_przystanku}</td> */}
          <td>{item.nazwaprzystanku}</td>
          <td>
            <button className='btnDel'
              onClick={() => deletePrzystanek(item.id_przystanku)}
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
export default TablePrzystanki;