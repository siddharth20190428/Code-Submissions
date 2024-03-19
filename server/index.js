const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "DB4",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/submissions/", (req, res) => {
  connection.query("SELECT * FROM submissions", (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      return res.status(500).send("Error executing query");
    }
    // Render results or do something with them
    res.json(results);
  });
});

app.post("/submissions/create/", (req, res) => {
  const data = req.body;
  const query = `INSERT INTO submissions (username, code_language, stdin, stdout, source_code) VALUES ('${data.username}', '${data.code_language}', '${data.stdin}', '${data.stdout}', '${data.source_code}')`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      return res.status(500).send("Error executing query");
    }
    // Render results or do something with them
    res.json(results);
  });
});

app.listen(5000, () => console.log("Server listening on PORT 5000"));
