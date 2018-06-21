
var express= require('express');
var app=express();
var passport= require('passport');
var session=require('express-session');
var ejs=require('ejs');
var mysql=require('mysql');
var bodyparser= require('body-parser');
app.use(passport.session);
app.use(bodyparser.urlencoded({extended:true}));
var authRoutes=require('./routes/auth-routes');
app.use(express.static("public"));
app.use(session({ secret: "cats" }));



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
/*
 passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
*/


 var passport=require('passport'),localStrategy=require('passport-local').Strategy;
 passport.use(new localStrategy({
  emailField:'email',
  passwordField:'password'
 },
   function(email,password,done){
    user.findOne({ email: email}, function (err,user){
      if(err){ return done(err);}
      if(!user){
        return done(null,false,{ message:'Incorrect username.'});
      }
      if(!user.validPassword(password)){
        return done(null,false, { message:'Incorrect password.'});
      }
      return done(null,user);
    });
   }
  ));


  app.post('/login', function(req, res, next) {
  passport.authenticate('local',{ successRedirect:'/',failureRedirect:'/login',
  failureFlash:'Invalid username or password.',successFlash:'Welcome!'} ,function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.email);
    });
  })(req, res, next);
});


app.post('/authenticate', function(req, res, next) {
    console.log(req.body.email);
    console.log(req.body.password);
    con.connect(function(err) {
  if (err) {console.log(err);}
  console.log("connected");
  var sql = "INSERT INTO `userinfo`(`email`,`password`) VALUES ('"+req.body.email+"','"+req.body.password+"')";
  con.query(sql, function(err, result)  {
   if(err) {console.log(err);} 
   console.log("table created");
  });
});

  res.render('signup', { title: 'Express' });
});

/*
app.post('/authenticate2', (req, res, next) => {
  console.log('authenticating')
  var email=req.body.email;
  var password=req.body.password;
  console.log(email,password, 'logging variables');
  let query = `select * from userinfo where email="${email}"`;
  console.log(query, 'logging query');
  con.query(query,
    function(error,results,fields){
      if(error){
        console.log(error);
         res.send({
          "code":400,
          "failed":"error occured"
         })
      }
      else{
        if(results.length>0){
          console.log(results[0]);
         
            if(results[0]['password']===password)

              // res.send({
              //   "code":200,
              //   "success":"login sucessfully"
              // });
              res.render('hello.ejs', { title: 'Express' });
              
           
           else{
              
              res.render('login.ejs', { title: 'Express' });
   
}
}}
})
});
*/

module.exports = authRoutes;


app.use(express.json());
//set up view engine
app.set('view engine','ejs');

//set up routes
app.use('/auth',authRoutes);

//create home route
app.get('/',(req,res)=>{
	res.render('home');
});

app.listen(3000,()=>{
	console.log('app now listening for request on port 3000');
})

/*
exports.login=function(req,res){
	var email=req.body.email;
	var password=req.body.password;
	connection.query('SELECT * FROM users WHERE email=?',[email],function (error,results,fields){
		function(error,results,fields){
			if(error){

			}
		}
	})
}
*/