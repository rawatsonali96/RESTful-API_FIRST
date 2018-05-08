var express=require('express');
var mysql =require('mysql');
var app=express();
var bodyParser = require('body-parser');
app.use(express.json());

var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'sampleDB'

})

connection.connect(function(error){
	if (error) {
	  console.log('error');
	} else{
	  //console.log('connected');
	}
}); 

var app = express();
 
// create application/json parser
// var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({
  extended: true
}));


// parse application/json
app.use(bodyParser.json())
 
// POST /login gets urlencoded bodies
/*app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
*/
 

app.post('/add', function(req,res){

	txtName = req.body.name
	emailName = req.body.email
	console.log(txtName, emailName, req.body, "print the query")
	query = `INSERT INTO sampleTable (id,name, email) VALUES (3, ${txtName}, ${emailName})`
    connection.query(query, function(error,row,fields)
     {

     	if(error){
     console.log('error in insertion', error);
     }else{
      console.log('data inserted',row[3]);
     }});
    });
  
	

app.get('/',function(req,res){
	 connection.query ("SELECT * from sampleTable", function(error,row,fields)
	
	{
		if (error) {
	 console.log('error in the query');
	} else{
	  console.log('successful query', row[0]);
	}}
   ) ;
});
 
app.get('/del',function(req,res){
 connection.query("DELETE FROM sampleTable WHERE name='sonali'", function(error,row,fields)
 {
   if(error){
     console.log('error in deletion');
     }else{
      console.log('Records deleted');
     }});
});

app.put('/update',function(req,res){
 connection.query("UPDATE sampleTable SET name='Jack' WHERE name='sonali'", function(error,row,fields)
 {
   if(error){
     console.log('error in deletion');
     }else{
      console.log('Records deleted');
     }});
});
 

app.listen(3000);
