module.exports = function() {
  var passport = require('passport');
  //var bcrypt = require('bcrypt');
  var passportLocal = require('passport-local');
  //var modelsUser = require('../models/user');
  var mongojs = require('mongojs');
  var db = mongojs('register', ['register']);
  
  //passport local config
passport.use(new passportLocal.Strategy({usernameField: 'email'}, function(email, password, done){
  //pretend this is using a real database
  db.register.findOne({email: email, password: password}, function (err, doc){
     if (err) {
        return done(err);
      }
      if (doc === null) {
        return done(null, null);
      }
      done(null, { id: email, name: email });
  });

  
}));

  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
      //Query database or cache here!
      done(null, { id: id, name: id});
  });
};



