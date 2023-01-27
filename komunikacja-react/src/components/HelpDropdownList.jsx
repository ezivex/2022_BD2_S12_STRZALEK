import React, { useState } from 'react';

function HelpDropdownList() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

const option_admin_dodaj_linie = <p className='contentText'><ol>
  <li>1. Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie liniami”.</li>
  <li>2. Pojawi się panel „Linie”, w którym po prawej stronie widać aktualną listę linii.</li>
  <li>3. W okienku po lewej stronie możesz wpisać nazwę linii oraz określić jej typ (1-normalna, 2-nocna, 3-metropolitalna, 4-zastepcza).</li>
  <li>4. Zakończ naciskając przycisk „Dodaj”</li>
  <li>5. Dodana linia powinna wyświetlić się na liście po prawej stronie.</li>
</ol></p>

const option_admin_usun_linie = <p classname='contentText'><ol>
  <li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie liniami”.</li>
  <li>2.	Pojawi się panel „Linie”, w którym po prawej stronie widać aktualną listę linii.</li>
  <li>3.	Klikając przycisk „Delete” w kolumnie „Akcje” możesz usunąć daną linię.</li>
</ol></p>

const option_admin_edytuj_linie = <p classname='contentText'><ol>
  <li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie liniami”.</li>
  <li>2.	Pojawi się panel „Linie”, w którym po prawej stronie widać aktualną listę linii.</li>
  <li>3.	Klikając przycisk „Edit” w kolumnie „Możliwe” możesz edytować przystanki należące do danej linii.</li>
  <li>4.	Po kliknięciu tego przycisku otwiera nam się panel edycji linii, w którym widać jakie przystanki należą do danej linii.</li>
  <li>5.	Po lewej stronie możesz wpisać do okienka pod „Identyfikator przystanku” jaki przystanek chcesz dodać, a następnie kliknąć przycisk „Dodaj przystanek dla linii”, by pojawił się na liście obok.</li>
  <li>6.	Po prawej stronie na liście przystanków w linii można usuwać przystanki klikając przycisk „Delete” obok danego przystanku.</li>
</ol></p>

const option_admin_dodaj_autobus = <p classname='contentText'><ol>
  <li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie kursami”.</li>
  <li>2.	Pojawi się panel „Autobusy”, w którym po lewej stronie widać aktualną listę autobusów oraz szczegóły ich dotyczące.</li>
  <li>3.	Kliknij przycisk „dodaj autobus” znajdujący się po prawej stronie.</li>
  <li>4.	Pojawi się panel dodawania autobusu, w którym w odpowiednich polach wpisz jego markę, rejestrację i rodzaj (1-normalny, 2-niskopodłogowy, 3-elektryczny), dodaj informację na temat ostatniego i kolejnego przeglądu oraz określ jego sprawność.</li>
  <li>5.	Potwierdź naciskając przycisk „Zapisz”</li>
  <li>6.	Po kliknięciu przycisku „Powrót” w prawym górnym rogu powinieneś przejść z powrotem do panelu „Autobusy”, w którym nowo dodany autobus powinien pojawić się na liście po lewej stronie.</li>
</ol></p>

const option_admin_usun_autobus = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie autobusami”.</li>
<li>2.	Pojawi się panel „Autobusy”, w którym po lewej stronie widać aktualną listę autobusów oraz szczegóły ich dotyczące.</li>
<li>3.	Klikając przycisk „Delete” w kolumnie „Delete” możesz usunąć dany autobus.</li>
</ol></p>

const option_admin_dodaj_kurs = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie kursami”.</li>
<li>2.	Pojawi się panel kursów, w którym po lewej stronie widać aktualną listę kursów oraz szczegóły ich dotyczące.</li>
<li>3.	W okienku po prawej stronie „Dodaj kurs” wpisz nazwę linii, rodzaj autobusu oraz czas odjazdu.</li>
<li>4.	Zakończ naciskając przycisk „Dodaj”.</li>
<li>5.	Dodany kurs powinien pojawić się na liście po lewej stronie.</li>
</ol></p>

const option_admin_usun_kurs = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie kursami”.</li>
<li>2.	Pojawi się panel „Kursy”, w którym po lewej stronie widać aktualną listę kursów oraz szczegóły ich dotyczące.</li>
<li>3.	Klikając przycisk „Delete” w kolumnie „Delete” możesz usunąć dany kurs.</li>
</ol></p>

const option_admin_dodaj_przystanek = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie przystankami”.</li>
<li>2.	Pojawi się panel przystanków, w którym po lewej stronie widać aktualną przystanków.</li>
<li>3.	W okienku po prawej stronie wpisz nazwę przystanku, który chcesz dodać.</li>
<li>4.	Zakończ naciskając przycisk „Dodaj przystanek”.</li>
<li>5.	Dodany przystanek powinien pojawić się na liście po lewej stronie.</li>
</ol></p>

const option_admin_usun_przystanek = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie przystankami”.</li>
<li>2.	Pojawi się panel „Przystanki”, w którym po lewej stronie widać aktualną listę kursów oraz szczegóły ich dotyczące.</li>
<li>3.	Klikając przycisk „Delete” w kolumnie „Delete” możesz usunąć dany kurs.</li>
</ol></p>

const option_admin_dodaj_uzytkownika = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie użytkownikami”.</li>
<li>2.	Pojawi się panel „Użytkownicy”, w którym po lewej stronie widać aktualną listę użytkowników oraz szczegóły ich dotyczące.</li>
<li>3.	Kliknij przycisk „dodaj użytkownika” znajdujący się po prawej stronie.</li>
<li>4.	Pojawi się panel dodawania użytkownika, w którym w odpowiednich polach wpisz jego imię, nazwisko, stanowisko(1-administrator, 2-dyspozytor, 3-kierowca), ulicę, miasto oraz wiek.</li>
<li>5.	Potwierdź naciskając przycisk „Dodaj”</li>
<li>6.	Po kliknięciu przycisku „Powrót” w prawym górnym rogu powinieneś przejść z powrotem do panelu „Użytkownicy”, w którym nowo dodany użytkownik powinien pojawić się na liście po lewej stronie.</li>
</ol></p>

const option_admin_usun_uzytkownika = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym administratora kliknij przycisk „Zarządzanie użytkownikami”.</li>
<li>2.	Pojawi się panel „Użytkownicy”, w którym po lewej stronie widać aktualną listę kursów oraz szczegóły ich dotyczące.</li>
<li>3.	Klikając przycisk „Delete” w kolumnie „Delete” możesz usunąć danego użytkownika.</li>
</ol></p>

const option_kierowca_dyspozycja = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym kierowcy kliknij przycisk „Dyspozycja”.</li>
<li>2.	Pojawi się panel „Kierowca” z rubrykami do wpisywania dyspozycji.</li>
<li>3.	W odpowiednich polach wpisz swój identyfikator, wybierz dzień (1-poniedziałek, 2-wtorek, 3-środa, 4-czwartek, 5-piątek) i rodzaj zmiany, który ci odpowiada.</li>
<li>4.	Zakończ naciskając przycisk „Dodaj zmiane”.</li>
</ol></p>

const option_kierowca_grafik = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym kliknij przycisk „Sprawdź grafik”.</li>
<li>2.	Pojawi się panel „Kierowca” z tabelką, za pomocą której możesz odczytać w jakie dni i na jaką zmianę zostałeś przypisany.</li>
</ol></p>

const option_dyspozytor_dodaj_realizacje = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym kliknij przycisk „Edycja kursów”.</li>
<li>2.	Pojawi się panel „Zarządzanie kursami”, w którym widać aktualna listę kursów.</li>
<li>3.	Poniżej w sekcji „Zrealizuj kurs” wybierz w jakim dniu chcesz dodać nową realizację kursu za pomocą list rozwijanych i przyporządkuj mu kierowcę oraz autobus.</li>
<li>4.	Zakończ naciskając przycisk „Dodaj”</li>
<li>5.	Dodany kurs powinien wyświetlić się na liście powyżej. </li>
</ol></p>   

const option_dyspozytor_usun_realizacje = <p classname='contentText'><ol>
<li>1.	Po zalogowaniu w panelu głównym kliknij przycisk „Edycja kursów”.</li>
<li>2.	Pojawi się panel „Zarządzanie kursami”, w którym widać aktualna listę kursów.</li>
<li>3.	Klikając przycisk „Delete” w kolumnie „Delete” możesz usunąć daną realizację kursu.</li>
</ol></p>    

const option_uzytkownik_lista_przystankow = <p classname='contentText'><ol>
<li>1.	Po kliknięciu w przycisk „Nasze przystanki” wyświetla się aktualna lista przystanków.</li>
</ol></p>    

const option_uzytkownik_lista_linii = <p classname='contentText'><ol>
<li>1.	Po kliknięciu w przycisk „Nasze linie” wyświetla się aktualna lista linii.</li>
</ol></p>    

  const sections = [    
    {name: 'Użytkownik',      
    options: [        
        { 
            name: 'Zobacz listę przystanków',          
            descriptions: [option_uzytkownik_lista_przystankow]
        },
        {
          name: 'Zobacz listę linii',
          descriptions: [option_uzytkownik_lista_linii]
        }
      ]
    },
    {name: 'Administrator',      
    options: [        
        { 
            name: 'Dodaj nową linię',          
            descriptions: [option_admin_dodaj_linie]
        },
        {
          name: 'Usuń linię',
          descriptions: [option_admin_usun_linie]
        },
        {
          name: 'Edytuj linię',
          descriptions: [option_admin_edytuj_linie]
        },
        {
          name: 'Dodaj nowy autobus',
          descriptions: [option_admin_dodaj_autobus]
        },
        {
          name: 'Usuń autobus',
          descriptions: [option_admin_usun_autobus]
        },
        {
          name: 'Dodaj nowy kurs',
          descriptions: [option_admin_dodaj_kurs]
        },
        {
          name: 'Usuń kurs',
          descriptions: [option_admin_usun_kurs]
        },
        {
          name: 'Dodaj nowy przystanek',
          descriptions: [option_admin_dodaj_przystanek]
        },
        {
          name: 'Usuń przystanek',
          descriptions: [option_admin_usun_przystanek]
        },
        {
          name: 'Dodaj nowego użytkownika',
          descriptions: [option_admin_dodaj_uzytkownika]
        },
        {
          name: 'Usuń użytkownika',
          descriptions: [option_admin_usun_uzytkownika]
        }
      ]
    },
    {name: 'Kierowca',      
    options: [        
        { 
            name: 'Określ swoją dyspozycję',          
            descriptions: [option_kierowca_dyspozycja]
        },
        {
          name: 'Sprawdź swój grafik',
          descriptions: [option_kierowca_grafik]
        }
      ]
    },
    {name: 'Dyspozytor',      
    options: [        
        { 
            name: 'Dodaj realizację kursu',          
            descriptions: [option_dyspozytor_dodaj_realizacje]
        },
        {
          name: 'Usuń realizację kursu',
          descriptions: [option_dyspozytor_usun_realizacje]
        }
      ]
    }
];

const handleSelectSection = (sectionName) => {
    if (selectedSection === sectionName) {
      setSelectedSection(null);
    } else {
      setSelectedOption(null);
      setSelectedSection(sectionName);
    }
  };
  
  const handleSelectOption = (optionName) => {
    if (selectedOption === optionName) {
      setSelectedOption(null);
    } else {
      setSelectedOption(optionName);
    }
  };
  

return (
    <div>
      {sections.map((section) => (
        <div className='dropdownContainer' key={section.name}>
          <h3 className='dropdownTitle' onClick={() => handleSelectSection(section.name)}>
            {section.name}
          </h3>
          {selectedSection === section.name &&
            section.options.map((option) => (
              <div className='dropdownOptionsContainer' key={option.name}>
                <p className='dropdownOptionsName' onClick={() => handleSelectOption(option.name)}>
                  {option.name}
                </p>
                {selectedOption === option.name && (
                  <ul className='dropdownDescriptions'>
                    {option.descriptions.map((description) => (
                      <li key={description}>{description}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );

}
export default HelpDropdownList;
