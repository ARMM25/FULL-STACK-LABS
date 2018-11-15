//creates express
var express = require('express');
	var app = express();
    var mongoose = require('mongoose');
 
 //creates the connection to the data base   
	mongoose.connect('mongodb://admin:password123@ds129233.mlab.com:29233/testdballan');
	
//creates a new schema
	var userSchema = mongoose.Schema({
	    name: String,
	    status: String
	})
	
//creates a new model
	var User = mongoose.model('User', userSchema);
	

    //input of 
	var john = new User({name: "Max", status: "active"});
	john.save(error => {
	    if (error) throw error;
	    console.log("User Saved!");
    });
    
	var jane = new User({name: "Allan", status: "active"});
	jane.save(error => {
	    if (error) throw error;
	    console.log("User Saved!");
	});
	

	

	

	var port = process.env.PORT || 3000;
	app.listen(port);
