module.exports=function(app,passport){
	
	app.get('/',function(req,res){
     res.render('home.ejs');
	});

	app.get('/login', function(req, res) {

        
        res.render('hello.ejs', { message: req.flash('loginmessage') }); 
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/hello', 
        failureRedirect : '/login', 
        failureFlash : true 
    }));

    app.get('/signup', function(req, res) {

       
        res.render('home.ejs', { message: req.flash('signupMessage') });
    });

   app.post('/signup', passport.authenticate('local-signup',{
         successRedirect:'/home',
         failureRedirect:'/signup',
         failureFlash:true
   }));

    app.get('/hello', isLoggedIn, function(req, res) {
        res.render('hello.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    app.get('/signout', function(req, res) {
        req.signout();
        res.redirect('/');
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

