import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableEditKursy = () => {


  
  const [items, setPrzystanekwLinii] = useState([]);
  const [hours, setHours] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idk = queryParams.get('id');

  const jeden = 146;
  const [godzina_odjazdu, SetRozkladjazdygodzina] = useState("");
  const [id_przystankiwlini, SetRozkladjazdyprzyst] = useState("");
  const [nazwa_kursu_id, SetRozkladjazdykursid] = useState(idk);

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

  // const getHours = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/rozklad_jazdy");
  //     const jsonData = await response.json();
  //     setHours(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   getHours();
  // }, []);
//============================================================


console.log("==============================");
const getData = async () => {
  let result = items;
result.map((user) => {
  console.log(user.id_przystlin);
});
};
getData();
console.log("==============================");
 


  //const [linia, SetLinia_id] = useState("");

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
        //window.location = "/PanelAutobusy";
      } catch (err) {
        console.error(err.message);
      }
    };
  //  ---------------------------------------------------


  return (
    <div>
      {/* <form onSubmit={onSubmitForm}> */}
        <table className='tableData'>
            <thead>
                <tr>
                    <th>Przystanki w linii nazwalini</th>
                    <th>Przystanki w linii nazwa przystanku</th>
                    <th>Godzina odjazdu</th>
                    {/* <th>Zaktualizuj</th> */}
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id_kurs}>
                        <td>{item.nazwalinii}</td>
                        <td>{item.nazwaprzystanku}</td>
                        <td>
                        <form onSubmit={onSubmitForm}>

                          <input type="number" name="nazwaprzystanku" onChange={e => SetRozkladjazdyprzyst(e.target.item.id_przystlin.value) } hidden />
                          

                          <input type="number" name="godzina_odjazdu" onChange={e => SetRozkladjazdygodzina(e.target.value) } required />
                        <input type="submit" value="dodaj" />
                        </form>
                        {/* <form onSubmit={onSubmitForm}>
                        <td>
                        <input type="number" name="nazwaprzystanku"/>
                        <input type="number" name="nazwaprzystanku" onChange={e => SetRozkladjazdyprzyst(e.target.value) } hidden />
                        <input type="number" name="godzina_odjazdu" onChange={e => SetRozkladjazdygodzina(e.target.value) } required />
                        </td>
                        <td>
                        <input type="submit" value="dodaj" />
                        </td>
                      </form> */}
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
