const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

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

//get all todos

app.get("/autobusy", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM autobusy ORDER BY id_bus ASC");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a specific todo
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

//update
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

//delete

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

//check if server works
app.listen(5000, () => {
    console.log("Server has started on port 5000")
});

