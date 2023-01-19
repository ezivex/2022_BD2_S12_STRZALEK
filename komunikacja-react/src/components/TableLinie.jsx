import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const TableLinie = () => {
 
  const [items, setLinia] = useState([]);
  
  const deleteLinia = async id => {
    try {
      const deleteLinia = await fetch(`http://localhost:5000/linia/${id}`, {
        method: "DELETE"
      });

      setLinia(items.filter(item => item.id_linii !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getLinia = async () => {
    try {
      const response = await fetch("http://localhost:5000/linia");
      const jsonData = await response.json();

      setLinia(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLinia();
  }, []);

  // const addRozkladJazdy = async (nazwa_kursu_id, id_przystankiwlini) => {
  //   try {
  //     const addRozkladJazdy = await fetch("http://localhost:5000/rozklad_jazdy", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ id_rj: null, nazwa_kursu_id: nazwa_kursu_id, id_przystankiwlini: id_przystankiwlini })
  //     });
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  return (
    <div>
    <table className='tableData'>
    <thead>
    <tr>
    <th> Nazwa Linii</th>
    <th>Typ Linii</th>
    <th>Możliwe</th>
    <th>Akcje</th>
    </tr>
    </thead>
    <tbody>
    {items.map(item => (
    <tr key={item.id_linii}>
    <td>{item.nazwalinii}</td>
    <td>{item.nazwa_typu}</td>
    <td>
      <Link to={`/EditLinia?id=${item.id_linii}`}>
        <button className='btnDel'>
          {/* onClick={() => addRozkladJazdy(item.nazwalinii, item.id_przystankiwlini)} */}
          Edit
        </button>
      </Link>
    </td>
    <td>
    <button className='btnDel'
    onClick={() => deleteLinia(item.id_linii)}
    >
    Delete
    </button>
    </td>
    </tr>
    ))}
    </tbody>
    </table>
    </div>
  );
}
export default TableLinie;