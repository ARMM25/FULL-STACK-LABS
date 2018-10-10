var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password123@ds129233.mlab.com:29233/testdballan');

var userSchema = mongoose.Schema({
    name: String,
    status: String
})

var User = mongoose.model('User', userSchema);

var john = new User({name: "John", status: "active"});
john.save(error => {
    if (error) throw error;
    console.log("User Saved!");
});
var jane = new User({name: "Jane", status: "active"});
jane.save(error => {
    if (error) throw error;
    console.log("User Saved!");
});



var port = process.env.PORT || 3000;
app.listen(port);

