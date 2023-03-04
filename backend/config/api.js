/** @format */

const bodyParser = require("body-parser");
const express = require("express");
const connection = require("./connection");
const db = require("./db");

// create a backend server
const app = express();

// check the database connection
db.connectionCheck
  .then((data) => {})
  .catch((err) => {
    console.log(err);
  });

// middleware to allow certain http calls
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// middleware to parse json from request body
app.use(bodyParser.json());

// set up router
// TODO: add an endpoint
const router = express.Router();
app.listen("/api", router);

// index route
app.get("/", (req, res) => {
  res.send("health check");
});

// create export
const config = {
  app: app,
};

module.exports = config;
