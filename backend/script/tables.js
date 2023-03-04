/** @format */

const mysql = require("mysql2");

const DATABASE_NAME = "cs348";

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
});

// check if the database named DATABASE_NAME already exists
connection.connect(function (err) {
  if (err) throw err;
  connection.query(`SHOW DATABASES`, function (err, result) {
    if (err) throw err;
    
  });
});

// create the database
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query(`SHOW DATABASES`, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Database created");
  });
});

// create tables
const tables = [
  `create table Airline
          (ID, numeric(5,0),
          name, varchar(50),
          alias, varchar(30),
          IATA, varchar(2),
          ICAO, varchar(3),
          callsign, varchar(50),
          country, varchar(50),
          active, varchar(1) check (active = "Y" or active = "N")
          primary key (ID))`,
  `create table Airport
          (ID, numeric(5,0),
          name, varchar(72),
          city, varchar(33),
          country, varchar(32),
          IATA, varchar(3),
          ICAO, varchar(4),
          Latitude, real,
          Longitude, real,
          Altitude, smallint,
          Timezone, numeric(3),
          DST,  varchar(1),
          primary key (ID))`,
  `create table Route
          (ID, int,
          Airline ID, smallint,
          Source Airport ID, smallint,
          Destination Airport ID, smallint,
          Codeshare, varchar(1),
          Equipment, varchar(40),
          primary key (ID),
          foreign key (Airline ID) references Airline),
          foreign key (Source Airport ID) references Airport),
          foreign key (Destination Airport  ID) references Airport))`,
  `create table Airplane
          (Name, varchar(70),
          IATA, varchar(4),
          ICAO, varchar(5),
          primary key (IATA))`,
  `create table Flight
          (ID, int,
          Flight status, varchar(9),
          Flight Date, varchar(10),
          Route, int,
          Airplane, varchar(4),
          primary key (ID),
          foreign key (Route) references Route,
          foreign key (Airplane) references Airplane`,
];
