const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "admin",
    host:  "localhost",
    port: 5432,
    //database: "niedziela6"
    database: "komunikacjav16"
});

module.exports = pool;