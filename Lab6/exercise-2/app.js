var express = require('express');
var app = express();

const rquestTime = (req, res, next) =>{
    re.requestTime = Date.now()
    next()
}


app.use(requestTime)

app.get('/greet', function(req, res){
    console.log('GET recieved: '+ req.requestTime);
    res.send('hello world');
}); 


app.post('/greet', function(req, res){
    res.status(201)
    res.send("IT HAS BEEN CREATED")});

app.put('/greet', function(req, res){
    res.status(200)
    res.send("IT HAS BEEN MODIFIED")});  

app.put('/greet', function(req, res){
    res.status(202)
    res.send("IT HAS BEEN DELETED")});  


app.listen(3000, ()=>{
    console.log("Example of listening port 3000");
});