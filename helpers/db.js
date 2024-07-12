const { Sequelize } = require("sequelize");

const db = new Sequelize("games", "admin", "Aero@password1", {
  host: "192.186.105.194",
  port: "1433",
  dialect: "mssql",
});

module.exports = {
  db,
};
