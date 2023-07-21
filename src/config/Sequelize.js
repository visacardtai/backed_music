const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("music", "root", "1111", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
