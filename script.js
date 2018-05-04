var express=require('express');
var mysql =require('mysql');
var app=express();
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

app.post('/add',function(req,res){
	connection.query("INSERT INTO sampleTable (id,name, email) VALUES (3, 'Mike','sty@gmail.com')", function(error,row,fields)
     {
     	if(error){
     console.log('error in insertion');
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
