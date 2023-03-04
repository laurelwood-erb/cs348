/** @format */

const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "cs348",
  connectionLimit: 100,
  waitForConnections: true,
});

pool.query(
  "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789'"
);

module.exports = pool;
