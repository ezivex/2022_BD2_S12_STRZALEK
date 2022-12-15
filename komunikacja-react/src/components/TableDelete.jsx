import React, { useEffect, useState } from 'react';

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
    <table>
    <thead>
      <tr>
        <th>Rejestracja</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id_bus}>
          <td>{item.rejestracja}</td>
          <td>
            <button
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