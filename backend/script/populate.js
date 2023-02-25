/** @format */

const fs = require("fs");
const { parse } = require("csv-parse");
const mysql = require("mysql2");

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "cs348",
});

// table information
const data = [
  {
    name: "airline",
    path: "../data/airlines.csv",
    query:
      "INSERT INTO Airline VALUES (ID, name, alias, IATA, ICAO, callsign, country, active) ?",
    indices: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  {
    name: "airplane",
    path: "../data/airplanes.csv",
    query: "INSERT INTO Airplanes VALUES (Name, IATA, ICAO) ?",
    indices: [0, 1, 2],
  },
  {
    name: "airport",
    path: "../data/airports.csv",
    query:
      "INSERT INTO Airport (ID, name, city, country, IATA, ICAO, Latitude, Longitude, Altitude, Timezone, DST) ?",
    indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "route",
    path: "../data/routes.csv",
    query:
      "INSERT INTO Route (ID, Airline_ID, Source_Airport_ID, Destination_Airport_ID, Codeshare, Equipment ?",
    indicies: [1, 3, 5, 6, 8],
  },
];

// insert each table
data.forEach((table_info) => {
  const table_data = [];
  fs.createReadStream(table_info.path, "utf8")
    .pipe(
      parse({
        delimiter: ",",
        columns: false,
        trim: true,
        skip_empty_lines: true,
        cast: function (value, _context) {
          return value == "" ? null : value;
        },
      })
    )
    .on("data", function (data) {
      table_data.push(data);
    })
    .on("end", () => {
      connection.query(
        table_info.query,
        [
          table_info.indicies.map(function (idx) {
            table_data[idx];
          }),
        ],
        true
      );
    });
});
