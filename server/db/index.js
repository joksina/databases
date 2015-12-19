var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
// var Sequelize = require('Sequelize');
// var sequelize = new Sequelize('chat', 'root', '');

// var User = sequelize.define('User', {
//   id: se
// })

// module.exports = function(){
//  var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat',
//   password: ''
// });

//  return connection;
// };

// connection.connect();



var dbConnection = mysql.createConnection({
      user: "root",
      password: "sequel",
      database: "chat"
    });
    dbConnection.connect();

    module.exports = dbConnection;
