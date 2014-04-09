var express = require('express');
var app = express();
var Parse = require('Parse').Parse;

app.use(express.static(__dirname + '/'));


app.post('/', function(req, res){
	// save the email in the database
	signUp(req, res);
});

function signUp(req, res){
	console.log(req.params);

	Parse.initialize("rOWCbLpzy32pKFACWDmDUk23fyusrV4aget92Dvz", "yC3Z5jS8gXhQ8wiL2rHyfdtWHaqyZNWDiqShEuZR");
	var user = new Parse.User();
	user.set("username", "davyengone");
	user.set("password", "sporten");
	user.set("email", "davy@sporten.co");
	user.set("sports", "basketball");

	user.signUp(null, {
	  success: function(user) {
	    console.log(user + ' added');
	    res.send(user);
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    res.send({user: user, error: error});
	  }
	});
}

app.listen( process.env.PORT || 3000);

