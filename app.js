var express = require('express'); 
var bodyParser = require('body-parser');
var app = express(); 

app.set('view engine','pug');
app.set('views','./views');

app.use(express.static('public'));
app.use(express.static('images'))
app.use('/static',express.static('public'));
//var things = require('./things.js');

/*
//Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   function/route handler.
   next();
});*/

/* app.use('/things',function(req,res,next){
	console.log("A new request received at " + Date.now());
    next();
});

app.get('/things',function(req,res){
	 res.send('Things');
}); */


//To parse URL encoded data
/* app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.use(function(req,res,next){
	console.log("Start");
	next();
});


//Route handler
app.get('/', function(req, res, next){
	console.log("Middle");	
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
}); */

app.get('/',function(req,res){
	res.render('first_view');
	
});


app.listen(3000);