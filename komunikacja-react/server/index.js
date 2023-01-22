const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const pool = require("./db");
// Session middleware
app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
}));

const loginCred = [
    {
        username: 'admin1',
        password: 'admin'
    },
    {
        username: 'kierowca1',
        password: 'kierowca'
    },
    {
        username: 'dyspozytor1',
        password: 'dyspozytor'
    }
];

app.get('/login', (req, res) => {
  if (req.session.user) {
      res.status(200).json({ message: 'You are already logged in' });
      console.log('logged');
  } else {
      res.status(200).json({ message: 'Please log in' });
  }
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const userData = loginCred.find((user) => user.username === username);

    if (userData) {
        if (userData.password !== password) {
            res.status(401).json({ message: 'Invalid password'});
        } else {
            req.session.user = userData;
            res.status(200).json({ message: 'Login successful' });
        }
    } else {
        // Username not found
        res.status(404).json({ message: 'Username not found' });
    }
});

app.get('/tables', (req, res) => {
    if (req.session.user) {
        res.status(200).json({ message: 'Access granted' });
    } 
    else {
        res.status(401).json({ message: 'Access denied' });
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error logging out' });
        } else {
            res.status(200).json({ message: 'Logout successful' });
        }
    });
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});

//ROUTES//



//testy=====
//GET ALL rodzajautobusy
app.get("/rodzaj_autobusu", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM rodzaj_autobusu ORDER BY id_rodzaj ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//GET ALL rodzajautobusy
app.get("/dni_tygodnia", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM dni_tygodnia ORDER BY id_dnityg ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//GET ALL rodzajautobusy
app.get("/typ_stanowiska", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM typ_stanowiska ORDER BY id_typstanowiska ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//GET ALL rodzajautobusy
app.get("/typ_linii", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM typ_linii ORDER BY id_typ_linii ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//===========


//------------------------------------- -------------------------------------  HOME PAGE ------------------------------------- ------------------------------------- //



// ***ShowLinie, ShowLinie2, ShowPrzystanki -> from ADMIN PANEL below


//------------------------------------- ------------------------------------- END OF HOME PAGE ------------------------------------- ------------------------------------- //



//------------------------------------- -------------------------------------  ADMIN PANEL ------------------------------------- ------------------------------------- //


// ------------------------------------- AUTOBUSY -------------------------------------  //
// ***PanelAutobusy, PanelAutobusy2

//ADD AUTOBUS 

app.post("/autobusy", async (req, res) => {
  try {
    const { rejestracja,marka,sprawnosc,rodzaj_autobusy,ostatni_przeglad,nastepny_przeglad } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO autobusy (rejestracja,marka,sprawnosc,rodzaj_autobusy,ostatni_przeglad,nastepny_przeglad) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [rejestracja,marka,sprawnosc,rodzaj_autobusy,ostatni_przeglad,nastepny_przeglad]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//GET ALL AUTOBUSY

app.get("/autobusy", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM autobusy, rodzaj_autobusu where id_rodzaj = rodzaj_autobusy ORDER BY id_bus ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//GET AUTOBUS
app.get("/autobusy/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM autobusy WHERE id_bus = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE AUTOBUS
// app.put("/autobusy/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { rejestracja,marka,sprawnosc,rodzaj_autobusy } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE autobusy SET rejestracja = $1, marka = $2, sprawnosc = $3, rodzaj_autobusy = $4  WHERE id_bus = $5",
//       [rejestracja,marka,sprawnosc,rodzaj_autobusy,id]
//     );

//     res.json("Autobusy was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//DELETE AUTOBUS

app.delete("/autobusy/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM autobusy WHERE id_bus = $1", [
      id
    ]);
    res.json("Bus was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


// ------------------------------------- END OF AUTOBUSY -------------------------------------  //



// ------------------------------------- PRZYSTANKI -------------------------------------  //
// ***PanelPrzystanki

//ADD PRZYSTANEK
app.post("/przystanki", async (req, res) => {
  try {
    const { nazwaprzystanku } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO przystanki (nazwaprzystanku) VALUES($1) RETURNING *",
      [nazwaprzystanku]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//GET ALL PRZYSTANKI

app.get("/przystanki", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM przystanki ORDER BY id_przystanku ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//DELETE PRZYSTANEK

app.delete("/przystanki/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM przystanki WHERE id_przystanku = $1", [
      id
    ]);
    res.json("Przystanek was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// ------------------------------------- END OF PRZYSTANKI -------------------------------------  //



// ------------------------------------- LINIA -------------------------------------  //
// ***PanelLinia

//ADD LINIA
app.post("/linia", async (req, res) => {
  try {
    const { nazwalinii,typ_linii } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO linia (nazwalinii,typ_linii) VALUES($1,$2) RETURNING *",
      [nazwalinii,typ_linii]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//GET ALL LINIE

app.get("/linia", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM linia, typ_linii where id_typ_linii = typ_linii ORDER BY id_linii ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/linia/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM linia WHERE id_linii = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//DELETE LINIA

app.delete("/linia/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM linia WHERE id_linii = $1", [
      id
    ]);
    res.json("Linia was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// ***PanelLinia2

//ADD przystanekwLinii
app.post("/przystanekwLinii", async (req, res) => {
  try {
    const { linia,przystanek_id } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO przystanekwLinii (linia,przystanek_id) VALUES($1,$2) RETURNING *",
      [linia,przystanek_id]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//ADD przystanekwLinii
// app.post("/przystanekwLinii/:linia", async (req, res) => {
//   try {
//     const { linia,przystanek_id } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO przystanekwLinii (linia,przystanek_id) VALUES($1,$2) RETURNING *",
//       [linia,przystanek_id]
//     );

//     res.json(newTodo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//GET ALL przystankiwLinii

app.get("/przystanekwLinii", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM przystanekwLinii, przystanki,linia where id_przystanku = przystanek_id and id_linii = linia ORDER BY id_przystLin ASC");

    // const allTodos = await pool.query("SELECT * FROM przystanekwLinii, przystanki, linia, kurs where id_przystanku = przystanek_id and id_linii = linia and nazwalini_k = id_linii  ORDER BY id_kurs ASC");

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//=====
//testowanie czy to dziala wogole
app.get("/przystanekwLinii/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM przystanekwlinii, przystanki, linia, kurs where id_przystanku = przystanek_id and id_linii = linia and nazwalini_k = id_linii and id_kurs = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// app.get("/przystanekwLinii/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("select * from kurs k, przystanekwlinii p, linia l where k.nazwalini_k = l.id_linii and l.id_linii = p.linia and k.id_kurs = $1", [
//       id
//     ]);

//     res.json(todo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
//===


/*
app.get("/linia/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM linia WHERE id_linii = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/przystanekwLinii/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allTodos = await pool.query("SELECT * FROM przystanekwLinii where linia = $1");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
*/


// app.get("/przystanekwLinii", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT nazwalinii,nazwaprzystanku FROM przystanekwLinii,linia,przystanki WHERE id_przystanku = przystanek_id AND linia = id_linii" );
//     res.json(allTodos.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });



//DELETE przystanekwLinii

app.delete("/przystanekwLinii/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM przystanekwLinii WHERE id_przystLin = $1", [
      id
    ]);
    res.json("Przystanek w linii was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// ------------------------------------- END OF LINIA -------------------------------------  //


// ------------------------------------- KURSY -------------------------------------  //
// ***PanelKursy

//ADD KURS
app.post("/kurs", async (req, res) => {
  try {
    const { nazwalini_k,rbus_k,czas_odjazdu } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO kurs (nazwalini_k,rbus_k,czas_odjazdu) VALUES($1,$2,$3) RETURNING *",
      [ nazwalini_k,rbus_k,czas_odjazdu ]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});



//GET ALL KURSY

app.get("/kurs", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM kurs,linia,rodzaj_autobusu where id_rodzaj = rbus_k and id_linii = nazwalini_k ORDER BY id_kurs ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//pobiera tylko jeden rekord 
app.get("/kurs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM kurs,linia,przystanekwlinii,przystanki where id_linii = nazwalini_k and id_linii = linia and przystanek_id = id_przystanku and id_kurs = $1", [
      id
    ]);
    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
});



//DELETE KURS
app.delete("/kurs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM kurs WHERE id_kurs = $1", [
      id
    ]);
    res.json("Kurs was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// ***PanelKursy2 //TODO // noPage

// ------------------------------------- END OF KURSY -------------------------------------  //


// ------------------------------------- ROZKLAD JAZDY -------------------------------------  //

app.post("/rozklad_jazdy", async (req, res) => {
  try {
    const { nazwa_kursu_id,id_przystankiwlini,godzina_odjazdu } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO rozklad_jazdy (nazwa_kursu_id,id_przystankiwlini,godzina_odjazdu) VALUES($1,$2,$3) RETURNING *",
      [ nazwa_kursu_id,id_przystankiwlini,godzina_odjazdu ]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/rozklad_jazdy", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM rozklad_jazdy ORDER BY id_rj ASC"); //TODO laczenie
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// ------------------------------------- END OF ROZKLAD JAZDY -------------------------------------  //

// ------------------------------------- UZYTKOWNICY -------------------------------------  //

//ADD UZYTKOWNIK
app.post("/uzytkownicy", async (req, res) => {
  try {
    const { imie,nazwisko,id_stanowisko,ulica,miasto,wiek } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO uzytkownicy (imie,nazwisko,id_stanowisko,ulica,miasto,wiek) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [ imie,nazwisko,id_stanowisko,ulica,miasto,wiek ]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//GET ALL UZYTKOWNICY

app.get("/uzytkownicy", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM uzytkownicy,typ_stanowiska where id_typstanowiska = id_stanowisko ORDER BY id_uzytkownik ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//DELETE UZYTKOWNIK

app.delete("/uzytkownicy/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM uzytkownicy WHERE id_uzytkownik = $1", [
      id
    ]);
    res.json("Uzytkownik was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});



// ------------------------------------- END OF UZYTKOWNICY -------------------------------------  //



//------------------------------------- ------------------------------------- END OF ADMIN PANEL ------------------------------------- ------------------------------------- //


//------------------------------------- -------------------------------------  DISPATCHER PANEL ------------------------------------- ------------------------------------- //


// ***DispatcherKursy i DispatcherKursyEdycja

//ADD REALIZACJA
app.post("/kurs_realizacja", async (req, res) => {
  try {
    const { id_kursu,dzien_rel,id_kierowcyrel,id_busurel} = req.body;
    const newTodo = await pool.query(
      "INSERT INTO kurs_realizacja (id_kursu,dzien_rel,id_kierowcyrel,id_busurel) VALUES($1,$2,$3,$4) RETURNING *",
      [ id_kursu,dzien_rel,id_kierowcyrel,id_busurel ]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//GET REALIZACJA
app.get("/kurs_realizacja", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM kurs_realizacja ORDER BY id_realizacji ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//DELETE UZYTKOWNIK

app.delete("/kurs_realizacja/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM kurs_realizacja WHERE id_realizacji = $1", [
      id
    ]);
    res.json("Realizacja kursu was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});





//------------------------------------- ------------------------------------- END OF DISPATCHER PANEL ------------------------------------- ------------------------------------- //


//------------------------------------- -------------------------------------  DRIVER PANEL ------------------------------------- ------------------------------------- //



// ***DriverDyspozycja

// ------------------------------------- DOSTEPNOSCI_KIEROWCOW -------------------------------------  //

// ***PanelKierowcy

//ADD DOSTEPNOSC
app.post("/dostepnosci_kierowcow", async (req, res) => {
  try {
    const { id_uzytk,dzien_tyg,rodzaj_zmiany } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO dostepnosci_kierowcow (id_uzytk,dzien_tyg,rodzaj_zmiany) VALUES($1,$2,$3) RETURNING *",    //TODO co z id kierowcy?
      [id_uzytk,dzien_tyg,rodzaj_zmiany]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//DELETE DOSTEPNOSC

app.delete("/dostepnosci_kierowcow/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM dostepnosci_kierowcow WHERE id_dostkier = $1", [
      id
    ]);
    res.json("Dostepnosc was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});



// ------------------------------------- END OF DOSTEPNOSCI_KIEROWCOW -------------------------------------  //



// ***DriverGrafik

//GET DOSTEPNOSC
app.get("/dostepnosci_kierowcow", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM dostepnosci_kierowcow, dni_tygodnia, uzytkownicy WHERE id_dnityg = dzien_tyg AND id_uzytk = id_uzytkownik;");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});




//------------------------------------- ------------------------------------- END OF DRIVER PANEL ------------------------------------- ------------------------------------- //


//------------------------------------- ------------------------------------- RODZAJ ZMIANY ------------------------------------- ------------------------------------- //



//GET ZMIANA
app.get("/rodzaj_zmiany", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM rodzaj_zmiany");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});