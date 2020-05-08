require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./db");
const routes = require("./src/network/routes");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// db();
routes(app);

/* Get a Static sources */
//app.use("/app", express.static("public"));

app.listen(process.env.PORT);
console.log(`APP LISTENING IN PORT: ${process.env.PORT}`);
