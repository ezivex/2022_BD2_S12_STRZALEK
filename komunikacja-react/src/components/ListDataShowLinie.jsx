import React, { useEffect, useState } from 'react';

const ListDataShowLinie = () => {
 
  const [items, setLinia] = useState([]);
  
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

  return (
    <div className='LinieShow'>
    <ul className="listaLiniData">
      {items.map(item => (
        <li className='btnListData' key={item.id}>{item.nazwalinii}</li>
      ))}
    </ul>
    </div>
  );
}
export default ListDataShowLinie;