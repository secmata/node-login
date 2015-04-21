var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('register', ['register']);
var passport = require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/create', function(req, res, next) {
  res.render('users/create', { title: 'Create' });
});

router.get('/ok', function(req, res, next) {
    db.register.findOne({email: 'giffordpangan@gmail.com', password: 'secret123'}, function (err, doc){
    	console.log(doc.email);
        //res.json(doc);
    });
	//res.send('ok');
});

router.post('/login', passport.authenticate('local'), function(req, res){
    res.redirect('/');
});

router.get('/login', function(req, res){
    res.render('users/login');
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
    //res.send('respond with a resource');
});


module.exports = router;
