import React, { useState, useEffect } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const TimeTable = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rozklad_jazdy")
      .then((response) => response.json())
      .then((data) => setSchedule(data));
  }, []);

  const printRef = React.useRef();

  const generatePDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generuj PDF</button>
      <div className="schedule-container" ref={printRef}>
        {schedule.reduce((unique, item) => {
            if (!unique.some(x => x.id_przystankiwlini === item.id_przystankiwlini)) {
                unique.push(item);
            }
            return unique;
        }, []).map((item, index) => (
            <div key={item.id_rj}>
                {(index === 0 || item.nazwa_kursu_id !== schedule[index - 1].nazwa_kursu_id) && (
                    <h2 className="schedule-title">Nazwa kursu: {item.nazwa_kursu_id}</h2>
                )}
                <div className="schedule-details-container">
                    <div className="schedule-details">
                        <div className="schedule-stop-id">Nazwa przystanku: {item.id_przystankiwlini}</div>
                        <div className="schedule-departure-time">Godziny odjazdów: <p className="schedule-departure-text">{(schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).length > 1 ? schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).map(x => x.godzina_odjazdu).join(', ') : item.godzina_odjazdu)}</p></div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
