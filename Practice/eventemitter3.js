var request = require("request");
var events = require('events');
var eventEmitter = new events.EventEmitter(); 
var handler = () => { request("http://www.google.com", function(error, response, body)
{
    console.log(body);
});
}




eventEmitter.on('data_received', function(){ 
    // handler();
    request("http://www.google.com", function(error, response, body)
    {
        console.log(body);
    });
});

eventEmitter.emit('data_received'); 