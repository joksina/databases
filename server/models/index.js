var db = require('../db');
var mysql = require('mysql');
//connection.connect()
// db.connect();

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT messages.id, messages.texts, messages.roomname, users.username \
                  from messages  \
                INNER JOIN users ON messages.userid = users.id', 
        function(err, results){
          if (err) {
            throw err;
          }else {
            cb(results);
          }
      });
    }, // a function which produces all the messages
    post: function (req, cb) {
      db.query('INSERT INTO MESSAGES(text, userid, roomname) / values (?, (SELECT ID FROM USERS WHERE USERNAME = ? limit 1), ?)', req, function(err, body){
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
          console.log('result:', results);
          cb(results);
        }
      });
    },
    post: function (req, cb) {
      db.query('INSERT INTO users(username) VALUES(?);', req, function(err, body){
          if(err) {
            throw err;
          } else {
            cb(body);
          }
        });
    }
  },
};


