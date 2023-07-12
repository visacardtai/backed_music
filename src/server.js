// declare library dotenv
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");

// sefl-defined function declaration
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 3001;

//config template engine
configViewEngine(app);

app.use(morgan("combined"));

app.use("/d19", webRoutes);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port} `)
);
