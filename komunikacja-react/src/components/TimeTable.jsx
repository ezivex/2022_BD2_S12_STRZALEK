import React, { useState, useEffect } from "react";

const TimeTable = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rozklad_jazdy")
      .then((response) => response.json())
      .then((data) => setSchedule(data));
  }, []);

  return (
    <div>
        <h2>{schedule.nazwa_kursu_id}</h2>
      <table>
        <thead>
          <tr>
            <th>Nazwa kursu</th>
            <th>Id przystanku</th>
            <th>Godzina odjazdu</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.id_rj}>
              <td>{item.nazwa_kursu_id}</td>
              <td>{item.id_przystankiwlini}</td>
              <td>{item.godzina_odjazdu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
