/** @format */

// get the client
const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "sys",
});

connection.query("SHOW TABLES", function (err, rows, fields) {
  console.log(err, rows, fields);
});
