var db = require('../db');

//connection.connect()

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM messages INNER JOIN users ON messages.userId = users.Id;', function(err, results){
            if (err) {
              console.log(cb(err));
            }else {
              console.log(cb(results));
            }       
      });
    }, // a function which produces all the messages
    post: function (req, cb) {
      // db.query('INSERT into messages ( texts, username, userId)
      //   VALUES(req.message, req.username, req.objectId);', function(err, body){
      //   if (err) {
      //     cb(err);
      //   }else {
      //     cb(body);
      //   }
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, cb) {
      // db.query('INSERT into user (username)
      //   VALUES(req.username);', function(err, body){
      //     if(err) {
      //       cb(err);
      //     } else {
      //       cb(body);
      //     }
      //   });
    }
  },
};


