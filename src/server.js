const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan("combined"));
app.get("/", (req, res) => res.send("Hello World!!!"));
app.get("/tientai", (req, res) => res.render("index.ejs"));
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port} `)
);
