var mysql = require('mysql');


var connection = mysql.createConnection({
  user: "root",
  password: "sequel",
  database: "chat"
});

connection.connect();

module.exports = connection;


