import React, { useState, useEffect } from "react";

const TimeTable = () => {
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const getTimetables = async () => {
      try {
        const response = await fetch("http://localhost:5000/rozklad_jazdy");
        const jsonData = await response.json();

        setTimetables(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    getTimetables();
  }, []);

  return (
    <div>
      {timetables.map((timetable, index) => (
        <div key={index}>
          <h2>{timetable.id_rj}</h2>
          <table>
            <thead>
              <tr>
                <th>Przystanek</th>
                <th>Godzina odjazdu</th>
              </tr>
            </thead>
            <tbody>
              {timetable.stops.map((stop, index) => (
                <tr key={index}>
                  <td>{stop.id_przystankiwlini}</td>
                  <td>{stop.godzina_odjazdu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
