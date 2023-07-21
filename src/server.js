// declare library dotenv
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");

const initRoutes = require("./routes");

// sefl-defined function declaration
const configViewEngine = require("./config/viewEngine");
// const ApiRoutes = require("./routes");
// create connection
const connection = require("./config/database");

// sequelize connect DB
const sequelize = require("./config/Sequelize");
const ConnectionDBSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    require("./models/relationship");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
ConnectionDBSequelize();

const app = express();
const port = process.env.PORT || 3001;

//config req.bode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

app.use(morgan("dev"));

initRoutes(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port} `)
);
