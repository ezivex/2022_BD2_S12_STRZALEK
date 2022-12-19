import React, { useEffect, useState } from 'react';

const TableUser = () => {
 
  const [items, setUser] = useState([]);
  
  const deleteUser = async id => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/uzytkownicy/${id}`, {
        method: "DELETE"
      });

      setUser(items.filter(item => item.id_uzytkownik !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/uzytkownicy");
      const jsonData = await response.json();

      setUser(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <table className='tableData'>
    <thead>
      <tr>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Stanowisko</th>
        <th>Ulica</th>
        <th>Miasto</th>
        <th>Wiek</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id_uzytkownik}>
          <td>{item.imie}</td>
          <td>{item.nazwisko}</td>
          <td>{item.id_stanowisko}</td>
          <td>{item.ulica}</td>
          <td>{item.miasto}</td>
          <td>{item.wiek}</td>
          <td>
            <button className='btnDel'
              onClick={() => deleteUser(item.id_uzytkownik)}
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
export default TableUser;