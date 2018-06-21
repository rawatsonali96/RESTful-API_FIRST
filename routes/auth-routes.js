//page to set routes
const router = require('express').Router();

//auth login
router.get('/signup',(req,res)=>{
	res.render('signup');
});

router.get('/login',(req,res)=>{
	res.render('login');
});

//auth logout
router.get('/signout',(req,res)=>{
	//handle with passport
	res.send('signing out');
});

router.get('/logout',(req,res)=>{
	//handle with passport
	res.send('logging out');
});

module.exports=router;