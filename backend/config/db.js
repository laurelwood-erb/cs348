/** @format */

const connection = require("./connection");

function connectionCheck() {
  return new Promise((resolve, reject) => {
    connection.getConnection(function (err, connection) {
      if (err) {
        if (connection) connection.release();
        reject(err);
      } else {
        resolve("success");
      }
    });
  });
}

function connectionRelease() {
  connection.on("release", function (connection) {
    console.log("Connection %d released", connection.threadId);
  });
}

module.exports = {
  connectionCheck: connectionCheck(),
  connectionRelease: connectionRelease(),
};
