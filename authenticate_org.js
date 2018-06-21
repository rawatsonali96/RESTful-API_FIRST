
const express= require('express');
const app=express();
const authRoutes=require('./routes/auth-routes');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json());
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