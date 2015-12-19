var models = require('../models');
var promise = require('bluebird');

var messages = [{

  text:"Hello World",
  username:"Hridhya",
  objectId: 1

}];
module.exports = {

  messages: {

    get: function (req, res) {
      console.log("In get");
      models.messages.get(){
        if(err){
        console.log(err);
        } else {
          res.JSON(messages);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // var data = [req.body.username, req.body.message, req.body.roomname];
      // models.messages.post(function(err, results){
      //   if(err) {
      //     console.log(err);
      //   } else {
      //     res.JSON(results);
      //   }
      // })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

