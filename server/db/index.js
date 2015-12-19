var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('chat', 'root', 'sequel');

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Messages = sequelize.define('Messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany('Messages');

Messages.belongsTo('User');

User.sync();
Messages.sync();

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



// var dbConnection = mysql.createConnection({
//       user: "root",
//       password: "sequel",
//       database: "chat"
//     });
//     dbConnection.connect();

    module.exports = dbConnection;
