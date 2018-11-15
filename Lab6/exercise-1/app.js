var express = require('express');
var app = express();


//configuring a route to return HTML content when the "/html" route is requested
app.get('/html', function (req, res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

//returns json content when "/jason" route is requested
app.get('/json', function(req,res){
    res.json({firstname: 'John', lastname: 'Smith'}); 
});

//this one allows a combination of the following: once you implement them in url
// /torontoraptorsteam
// /torontomarliesteam
// /torontoabcteam
// /torontoteam
app.get('/toronto(raptors|marlies|abc)?team', function(req,res){
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});

app.listen(3000, function(){
    console.log("Example of listening port 3000");
});

//now it must be run the app, nodemon and then must be invoked from browser on port 3000