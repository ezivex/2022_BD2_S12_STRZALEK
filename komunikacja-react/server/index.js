const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json()); 

//ROUTES//

//------------------------------------- -------------------------------------  ADMIN PANEL ------------------------------------- ------------------------------------- //


// ------------------------------------- AUTOBUSY -------------------------------------  //
//ADD AUTOBUS 

app.post("/autobusy", async (req, res) => {
  try {
    const { rejestracja,marka,sprawnosc,rodzaj_autobusy } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO autobusy (rejestracja,marka,sprawnosc,rodzaj_autobusy) VALUES($1,$2,$3,$4) RETURNING *",
      [rejestracja,marka,sprawnosc,rodzaj_autobusy]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//ADD KURS 

// app.post("/kurs", async (req, res) => {
//   try {
//     const { nazwaLini_k,rbus_k,czas_odjazdu } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO kurs (nazwaLini_k,rbus_k,czas_odjazdu) VALUES($1,$2,$3) RETURNING *",
//       [nazwaLini_k,rbus_k,czas_odjazdu]
//     );

//     res.json(newTodo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });



//GET ALL AUTOBUSY

app.get("/autobusy", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM autobusy ORDER BY id_bus ASC");
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
app.put("/autobusy/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rejestracja,marka,sprawnosc,rodzaj_autobusy } = req.body;
    const updateTodo = await pool.query(
      "UPDATE autobusy SET rejestracja = $1, marka = $2, sprawnosc = $3, rodzaj_autobusy = $4  WHERE id_bus = $5",
      [rejestracja,marka,sprawnosc,rodzaj_autobusy,id]
    );

    res.json("Autobusy was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

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


//TODO



// ------------------------------------- END OF LINIA -------------------------------------  //
// ------------------------------------- KURSY -------------------------------------  //



//TODO //testowanie


//ADD KURS
app.post("/kurs", async (req, res) => {
  try {
    const { nazwaLini_k,rbus_k,czas_odjazdu } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO kurs (nazwaLini_k,rbus_k,czas_odjazdu) VALUES($1,$2,$3) RETURNING *",
      [ nazwaLini_k,rbus_k,czas_odjazdu ]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//GET ALL KURSY

app.get("/kurs", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM kurs ORDER BY id_kurs ASC");
    res.json(allTodos.rows);
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

// ------------------------------------- END OF KURSY -------------------------------------  //







//------------------------------------- ------------------------------------- END OF ADMIN PANEL ------------------------------------- ------------------------------------- //





// CHECK IF SERVER WORKS
app.listen(5000, () => {
  console.log("Server has started on port 5000")
});