var models = require('../models');
// var bluebird = require('bluebird');

module.exports = {

  messages: {

    get: function (req, res) {
      models.messages.get(function(results){
        res.status(200).json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = [req.body.username, req.body.message, req.body.roomname];
      models.messages.post(data, function(body) {
        res.status(200).end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results){
        console.log(results);
        res.status(200).json(results);
      });
    },
    post: function (req, res) {
      var data = [req.body.username];
      models.users.post(data, function(body){
        res.status(200).end();
      });
    }
  }
};

//REFACTOR SEQUELIZE
// module.exports = {
//   messages: {
//     get: function (req, res) {
//       Messages.findAll({include: [User]}).complete(function(err, results) {
//         res.json(results);
//       });
//     },
//     post: function(req, res) {
//       User.findOrCreate({username: req.body.username}).complete(function(err, user){
//         user.id

//         var data = {text: req.body.text, userId: user.id, roomname: req.body.roomname};
//         Messages.create(data).complete(function(err, results){
//           res.sendStatus(201);
//         });
//       });
//     }
//   },

//   users: {
//     get: function(req, res) {
//       User.findAll().complete(function(err, results) {
//         res.json(results);
//       });
//     },
//     post: function(req, res) {
//       User.create({username: req.body.username}).complete(function(err, user){
//         res.sendStatus(201);
//       });
//     }
//   }
// };

