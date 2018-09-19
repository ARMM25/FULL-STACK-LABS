var http = require('http') //calls http library! which is built in
var server = http.createServer((function(request,response) //we create server using the http library!
{
    response.writeHead(200, //MUST set content header
    {"Content-Type": "text/plain"});

    response.end("Hello World\n"); //set the string message to response
}));

    server.listen(7000); //set the server listening