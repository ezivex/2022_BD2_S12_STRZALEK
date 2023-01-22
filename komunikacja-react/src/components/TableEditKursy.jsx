import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableEditKursy = () => {
  const [items, setPrzystanekwLinii] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');
  
  const [godzina_odjazdu, SetRozkladjazdygodzina] = useState(0);
  const [id_przystankiwlini, SetRozkladjazdyprzyst] = useState(0);
  const [nazwa_kursu_id, SetRozkladjazdykursid] = useState(parseInt(idk));
  
  const getPrzystanekwLinii = async () => {
  try {
  const response = await fetch(`http://localhost:5000/kurs/${idk}`);
  const jsonDataprzyst = await response.json();
  setPrzystanekwLinii(jsonDataprzyst);
  } catch (err) {
  console.error(err.message);
  }
  };
  
  useEffect(() => {
  getPrzystanekwLinii();
  }, []);
  
  const onSubmitForm = async e => {
  e.preventDefault();
  try {
  const body = { nazwa_kursu_id, id_przystankiwlini, godzina_odjazdu};
  const response = await fetch("http://localhost:5000/rozklad_jazdy", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
  });
  window.location.reload(false);
  } catch (err) {
  console.error(err.message);
  }
  };
  
  return (
  <div>
  <table className='tableData'>
  <thead>
  <tr>
  <th>Przystanki w linii nazwalini</th>
  <th>Przystanki w linii nazwa przystanku</th>
  <th>Godzina odjazdu</th>
  </tr>
  </thead>
  <tbody>
  {items.map(item => (
  <tr key={item.id_kurs}>
  <td>{item.nazwalinii}</td>
  <td>{item.nazwaprzystanku}</td>
  <td>
  <form onSubmit={onSubmitForm}>
  <input type="number" name="przyst" value={item.id_kurs} onChange={e => SetRozkladjazdykursid(e.target.value) }/>
  <input type="number" name="przyst" value={item.id_przystlin} onChange={e => SetRozkladjazdyprzyst(e.target.value) }/>
  <input type="number" placeholder="godzina odjazdu" onChange={e => SetRozkladjazdygodzina(e.target.value)} required />
  <button type="submit">Zaktualizuj</button>
  </form>
  </td>
  </tr>
  ))}
  </tbody>
  </table>
        {/* </form> */}
    </div>
  );
}
export default TableEditKursy;
