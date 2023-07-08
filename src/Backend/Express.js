const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");

app.use(cors());
app.use(express.json());

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

app.put("/movie-catalog/:id", (req, res) => {
  const { id } = req.params;
  const { rating, viewed } = req.body;

  let query = "";
  let values = [];

  if (rating !== undefined) {
    query = "UPDATE movie_catalog SET rating=$1 WHERE id=$2";
    values = [rating, id];
  } else if (viewed !== undefined) {
    query = "UPDATE movie_catalog SET viewed=$1 WHERE id=$2";
    values = [viewed, id];
  }

  pool.query(query, values, (error, results) => {
    if (error) {
      res.status(400).json({ error });
      throw error;
    }
    res.status(200).json({ status: "success", message: "movie updated" });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
