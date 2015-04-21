var mongojs = require('mongojs');
var db = mongojs('register', ['register']);

exports.findUser = function(email, done) {
  db.register.findOne({email: 'giffordpangan@gmail.com'}, function(err, user) {
    done(err, user);
  });
};




/*
 db.register.findOne({email: 'giffordpangan@gmail.com', password: 'secret123'}, function (err, doc){
      console.log(doc);
        //res.json(doc);
    });

//var bcrypt = require('bcrypt');
//var User = require('../models/user').User;
/*
exports.addUser = function(user, next) {
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    
    var newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      roomNumber: user.roomNumber,
      email: user.email.toLowerCase(),
      password: user.password
    });
    
    newUser.save(function(err) {
      if (err) {
        return next(err);
      }
      next(null);
    });
  });
};

exports.findUser = function(email, next) {
  User.findOne({email:email.toLowerCase()}, function(err, user) {
    next(err, user);
  });
};*/