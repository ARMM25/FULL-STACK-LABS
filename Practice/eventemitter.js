var events = require('events'); //state that you require the events module

var eventEmitter = new events.EventEmitter(); //now create a new event emitter

eventEmitter.on('data_received', function(){ //now create a callback function for the event
    console.log('data received succesfully.');
});

    eventEmitter.emit('data_received'); //now trigger the event ->there must be an indent to work