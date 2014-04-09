var express = require('express');
var app = express();
var Parse = require('Parse').Parse;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded());


app.post('/signUp', function(req, res){
	signUp(req, res);
});

function signUp(req, res){

	Parse.initialize("rOWCbLpzy32pKFACWDmDUk23fyusrV4aget92Dvz", "yC3Z5jS8gXhQ8wiL2rHyfdtWHaqyZNWDiqShEuZR");

	var UserBase = Parse.Object.extend("UserBase");
	var query = new Parse.Query(UserBase);

	query.equalTo("email", req.body.email);
	query.first({
		success: function(data){
			console.log(data);
			if (data.length === 1) {
				console.log('1');
				res.send({exists: true});
			}else{
				var user = new UserBase();

				user.set('email', req.body.email);

				user.save(null, 
				{
				  	success: function(user) {
					    	res.send(user);
				  		},
				  	error: function(user, error) {
					    	res.send({exists: true});
				  		}
				});
			}
		},
		error: function(error){
			res.send({exists: true});
		}
	});
}

app.listen( process.env.PORT || 3000);

