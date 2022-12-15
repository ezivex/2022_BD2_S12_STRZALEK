import React, { useEffect, useState } from 'react';

const MyListComponent = () => {
 
  const [items, setBus] = useState([]);
  
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
    <ul className="listaLiniData">
      {items.map(item => (
        <li className='btnListData' key={item.id}>{item.marka} {item.rejestracja}</li>
      ))}
    </ul>
  );
}
export default MyListComponent;