/** @format */

const mysql = require("mysql");

module.exports = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "cs348",
});
