var models = require('../models');
var promise = require('bluebird');

module.exports = {

  messages: {

    get: function (req, res) {
      models.messages.get(function(err, results){
        if(err){
          throw err;
        } else {
          res.JSON(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = [req.body.username, req.body.message, req.body.roomname];
      models.messages.post(data, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.JSON(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        if (err) { throw err; }
        res.JSON(results);
      });
    },
    post: function (req, res) {
      var data = [req.body.username];
      models.users.post(data, function(err, results){
        res.JSON(results);
      });
    }
  }
};

