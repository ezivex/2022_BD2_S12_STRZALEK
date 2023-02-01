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
    const pdfHeight =(imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
};
//======
//schedule to dane wszystkie
//const danekursywszystkie = [];
// const mojafun2 = async () => {
//     let result3 = schedule;
//     let godzinyprzystankujednego = [];
//     result3.map((ele) => {
//         //zebranie wszystkich przystankow
//         danenazwaprzyst.push(ele.nazwaprzystanku);//wszystkie przystanki co sa w tej linii np 3x wszystkie bo 3 kursy ...
//         console.log("pppppppppppppppppppppppp");
//         console.log(ele.nazwaprzystanku);
//         console.log("pppppppppppppppppppppppp");
//         // if(ele.nazwaprzystanku === "Przystanek A"){
//         //     godzinyprzystankujednego.push(ele.godzina_odjazdu);
//         //     console.log(godzinyprzystankujednego);
//         // }
//     });
//     console.log("==");
//     console.log("--");
//     var nowa = [];
//     danenazwaprzyst.forEach(element => {
//         if(!nowa.includes(element))
//         {
//             nowa.push(element);
//         }
//     })
//     // danenazwaprzyst.filter((item,index) => danenazwaprzyst.indexOf(item) === index);
//     console.log(nowa);//same przystanki 
//     console.log("--");

//     //laczenie przyst z godz
//     nowa.forEach(element => {
//         result3.map((ele) => {
//             if(ele.nazwaprzystanku === element){
//                 godzinyprzystankujednego.push(ele.godzina_odjazdu + "  |  ");
//                 console.log(godzinyprzystankujednego);
//             }
        
//         });
//         //teraz to zapisać do mapy już na stałe
//         daneprzysgodz.push({value: element, label:  godzinyprzystankujednego});
//         godzinyprzystankujednego = [];//reset
//     });
        
//   };
//   mojafun2();
const wszystkiekursyy = [];
const mojafun2 = async () => {
    let result3 = schedule;
    console.log("items:");
    console.log(schedule);
    let godzinyprzystankujednego = [];
    result3.map((ele) => {
        //zebranie wszystkich przystankow
        if (!wszystkiekursyy.some(x => x.id_przystankiwlini === ele.id_przystankiwlini))
        {
            wszystkiekursyy.push(ele);//wszystkie przystanki co sa w tej linii np 3x wszystkie bo 3 kursy ...
        }
        
        console.log("pppppppppppppppppppppppp");
        console.log(ele);
        console.log("pppppppppppppppppppppppp");
        // if(ele.nazwaprzystanku === "Przystanek A"){
        //     godzinyprzystankujednego.push(ele.godzina_odjazdu);
        //     console.log(godzinyprzystankujednego);
        // }
    });
    console.log("==");
    console.log("--");
    var nowa = [];
    wszystkiekursyy.forEach(element => {
        if(!nowa.includes(element))
        {
            nowa.push(element);
        }
        
    })
    console.log(nowa);//same przystanki
console.log("====");
};
mojafun2();

return (

    <div>

      <button onClick={generatePDF}>Generuj PDF</button>

      <div className="schedule-container" ref={printRef}>
        {schedule.reduce((unique, item) => {
            
            unique.push(item);
            // if (!unique.some(x => x.id_przystankiwlini === item.id_przystankiwlini)) {
            //     unique.push(item);
            // }
            return unique;
        }, []).map((item, index) => (
            <div key={item.id_rj}>
                {(index === 0 || item.nazwa_kursu_id !== schedule[index - 1].nazwa_kursu_id) && (
                    <h2 className="schedule-title">Nazwa kursu: {item.nazwalinii}</h2>
                )}

                <div className="schedule-details-container">
                    <div className="schedule-details">
                        <div className="schedule-stop-id">Nazwa przystanku: 
                        {item.nazwaprzystanku}
                        </div>
                        <div className="schedule-departure-time">Godziny odjazdów: 
                        <p className="schedule-departure-text">{(schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).length > 1 ? schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).map(x => x.godzina_odjazdu).join(', ') : item.godzina_odjazdu)}</p>
                        </div>
                    </div>
                </div>



                {/* <div className="schedule-details-container">
                    <div className="schedule-details">
                        <div className="schedule-stop-id">Nazwa przystanku: {item.nazwaprzystanku}</div>
                        <div className="schedule-departure-time">Godziny odjazdów: <p className="schedule-departure-text">{(schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).length > 1 ? schedule.filter(x => x.nazwa_kursu_id === item.nazwa_kursu_id && x.id_przystankiwlini === item.id_przystankiwlini).map(x => x.godzina_odjazdu).join(', ') : item.godzina_odjazdu)}</p></div>
                    </div>
                </div> */}

            </div>
        ))}
      </div>

    </div>

  );
};
export default TimeTable;