// create express js server
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8081;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
  console.log('creating database'),

);

// create mysql db
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "sys",
});

connection.query("SHOW TABLES", function (err, rows, fields) {
  console.log(err, rows, fields);
});
