const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");

app.use(cors());

const pool = new Pool({
  user: "doadmin",
  host: "movie-catalog-do-user-14345231-0.b.db.ondigitalocean.com",
  database: "defaultdb",
  password: "AVNS_RQCCSQDa9joIohjKULV",
  port: 25060,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/movie-catalog", (req, res) => {
  pool.query("SELECT * FROM movie_catalog", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
