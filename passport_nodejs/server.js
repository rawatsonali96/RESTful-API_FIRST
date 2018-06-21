var express=require('express');
var app = express();
var passport = require('passport');
var flash = require('connect-flash');
var session=require('express-session');
var ejs=require('ejs');
var mysql=require('mysql2');
var bodyparser= require('body-parser');



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

app.set('view engine','ejs');

app.get('/login', function(req, res) {

        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

 
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });



app.get('/',(req,res)=>{
	res.render('home');
});

app.listen(3000,()=>{
	console.log('app now listening for request on port 3000');
})

/*
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var port     = process.env.PORT || 8080;

var passport = require('passport');
var flash    = require('connect-flash');

// configuration ===============================================================
// connect to our database

require('./config/passport')(passport); // pass passport for configuration



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
*/