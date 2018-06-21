var express= require('express');
var app=express();
var ejs=require('ejs');
var mysql=require('mysql');
var bodyparser= require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
var authRoutes=require('./routes/auth-routes');

var host='localhost';
var port='3000';
var mysql_user='root';
var mysql_pass='rawat@08';
var database='cloudprint';
var table='userinfo;';

var con=mysql.createConnection({
host:host,
user:mysql_user,
password:mysql_pass,
database:database,
});

/*app.post('login',passport.authenticate('local',{ successRedirect:'/',failureRedirect:'/login',
	failureFlash:'Invalid username or password.',successFlash:'Welcome!'}),function(req,res)
{   res.json({email:req.body.email,password:req.body.password});
	//res.redirect('/hello'+req.user.username);
});
*/
app.get('/login', function(req, res, next) {
  passport.authenticate('local',{ successRedirect:'/',failureRedirect:'/login',
	failureFlash:'Invalid username or password.',successFlash:'Welcome!'} ,function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});
