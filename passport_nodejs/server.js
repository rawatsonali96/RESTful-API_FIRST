var express=require('express');
var app = express();
var passport = require('passport');
var flash = require('connect-flash');
var session=require('express-session');
var ejs=require('ejs');
var mysql=require('mysql2');
var bodyparser= require('body-parser');
var authRoutes=require('./routes/auth-routes');


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(session({ secret: "dogs" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



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

require('./app/routes.js')(app, passport);
require('./config/passport')(passport);


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
