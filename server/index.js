const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080/",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(5000, () => console.log("Server listening on PORT 5000"));
