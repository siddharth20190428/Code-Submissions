const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const submissionsRoutes = require("./submissionsRoutes.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/submissions", submissionsRoutes);

app.listen(5000, () => console.log("Server listening on PORT 5000"));
