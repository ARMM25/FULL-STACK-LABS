//require built-in file system module

var fs = require('fs');

//create readable stream to read in the file

var stream = fs.createReadStream("data.txt");

//suscribe to the 'data' emitter in readable stream
//stream.on("data", function(data) {
//    console.log(data);
//})

var array = fs.readFileSync('data.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
};