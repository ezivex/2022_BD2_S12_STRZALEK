import React, { useState, useEffect } from 'react';

const MyListComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
export default MyListComponent;