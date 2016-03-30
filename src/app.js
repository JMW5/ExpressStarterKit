'use strict';

var express = require('express');
var books = require('./data/books.json');


var app = express();

//Middleware
app.use(express.static(__dirname + '/public'));

//Set the template engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

//Creating routes
app.get('/', function(request, response) {
	response.render('index');
});
app.get('/:title', function(request, response) {
	var title = request.params.title;
	var book = books[title];
	response.send(book);
});
//Set up Development Server using listen() method port: 5000
//Run node app in the terminal
app.listen(5000, function() {
	console.log("Serving is running at localhost:5000");
});