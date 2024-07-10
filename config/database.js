const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("student_dashboard", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
