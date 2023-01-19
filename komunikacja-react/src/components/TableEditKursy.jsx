import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableEditKursy = () => {
  const [items, setPrzystanekwLinii] = useState([]);
  const [hours, setHours] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');

  const [zmienna, setPgetPrzystanekwLinii] = useState(idk);

  const getPrzystanekwLinii = async () => {
    try {
      const response = await fetch("http://localhost:5000/przystanekwLinii");
      const jsonData = await response.json();
      const xd = parseInt(zmienna);
      setPrzystanekwLinii(jsonData.filter(jsonData => jsonData.linia === xd));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getHours = async () => {
    try {
      const response = await fetch("http://localhost:5000/rozklad_jazdy");
      const jsonData = await response.json();
      setHours(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPrzystanekwLinii();
    getHours();
  }, []);

  const handleChange = (e, id_przystlin) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(item => item.id_przystlin === id_przystlin);
    newItems[itemIndex] = { ...newItems[itemIndex], godzina_odjazdu: e.target.value };
    setPrzystanekwLinii(newItems);
  };

  const handleUpdate = async (id_przystlin) => {
    try {
      const updatedItem = items.find(item => item.id_przystlin === id_przystlin);
      const hourToUpdate = hours.find(hour => hour.id_przystanekwlini === id_przystlin);
      const response = await fetch(`http://localhost:5000/rozklad_jazdy/${hourToUpdate.id_rj}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ godzina_odjazdu: updatedItem.godzina_odjazdu })
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
        <table className='tableData'>
            <thead>
                <tr>
                    <th>Przystanki w linii</th>
                    <th>Godzina odjazdu</th>
                    <th>Zaktualizuj</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id_przystlin}>
                        <td>{item.nazwaprzystanku}</td>
                        <td>
                            {hours.find(hour => hour.id_przystanekwlini === item.id_przystlin) ?
                                hours.find(hour => hour.id_przystanekwlini === item.id_przystlin).godzina_odjazdu :
                                <input type="number" onChange={(e) => handleChange(e, item.id_przystlin)} placeholder="Godzina odjazdu" />
                            }
                        </td>
                        <td>
                            <button onClick={() => handleUpdate(item.id_przystlin)}>Zaktualizuj</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
export default TableEditKursy;
