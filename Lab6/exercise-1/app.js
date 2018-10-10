var express = require('express');
var app = express();



app.get('/html', function (req, res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});


app.get('/jason', function(req,res){
    res.json({firstname: 'john', lastname: 'Smith'}); 
});

app.get('/toronto(raptors|marlies|abc)?team', function(req,res){
    req.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});

app.listen(3000, ()=>{
    console.log("Example of listening port 3000");
});

//now it must be run the app, nodemon and then must be invoked from browser on port 3000