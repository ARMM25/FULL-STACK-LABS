var express = require('express');
var app = express();

const requestTime = (req, res, next) =>{
    req.requestTime = Date.now()
    next()
}
app.use(requestTime)


app.get('/greet', function(req, res){
    console.log('GET recieved: '+ req.requestTime); //this outputs message to console 
    res.send('hello world'); //this outputs message on post master 
}); 

 //this will display the message on program post master 
app.post('/greet', function(req, res){
    res.status(201)
    res.send("IT HAS BEEN CREATED")});

 //this will display the message on program post master 
app.put('/greet', function(req, res){
    res.status(200)
    res.send("IT HAS BEEN MODIFIED")});  

    //this will display the message on program post master 
app.delete('/greet', function(req, res){
    res.status(202)
    res.send("IT HAS BEEN DELETED")});  



app.listen(3000, ()=>{
    console.log("Example of listening port 3000");
});