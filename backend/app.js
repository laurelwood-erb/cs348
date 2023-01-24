/** @format */

const express = require("express");

// Create the Express applictation
const app = express();

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
