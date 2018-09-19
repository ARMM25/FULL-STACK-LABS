var ft = require('./sportsteam');
var comp = require('./comparer');
var calc = require('./calculator');
var events = require('events');


//set module property
ft.teamname = 'Leafs';
//call module method
ft.Cheer();
ft.Boo();


//ex2
var num1 = 5;
var num2 = 10;

var result = (comp.AreNumberEqual(num1, num2)) ? calc.Add(num1, num2) : calc.Substract(num1, num2);
console.log(result);

//ex3
var eventEmitter = new events.EventEmitter();


var alarmHandler = function(){
    console.log('Alarm has been triggered!');
    eventEmitter.emit('call911');
}

var call911Handler = function(){
    console.log('Call911');
}

eventEmitter
.on('alarm', alarmHandler)
.on('call911', call911Handler);

eventEmitter.emit('alarm');



