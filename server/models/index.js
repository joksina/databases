var db = require('../db');
var mysql = require('mysql');
//connection.connect()

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * messages.id, messages.text, messages.roomname, \
      users.username LEFT OUTER JOIN users ON (messages.userid = user.id) \
        ORDER BY messages.id desc', function(err, results){
          if (err) {
            console.log(cb(err));
          }else {
            console.log(cb(results));
          }
      });
    }, // a function which produces all the messages
    post: function (req, cb) {
      db.query('INSERT iINTO MESSAGES(text, userid, roomname) / values (?, (SELECT ID FROM USERS WHERE USERNAME = ? limit 1), ?)', function(err, body){
        if (err) {
          cb(err);
        }else {
          cb(body);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT * FROM users', function(err, results) {
        if(err) {
          throw err;
        } else {
          cb(results);
        }
      });
    },
    post: function (req, cb) {
      db.query('INSERT INTO users(username) VALUES(?);', function(err, body){
          if(err) {
            throw err;
          } else {
            cb(body);
          }
        });
    }
  },
};


