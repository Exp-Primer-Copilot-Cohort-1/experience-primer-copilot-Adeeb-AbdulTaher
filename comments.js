// Create web server
var express = require('express');
var app = express();
// Create a route for the root path
app.get('/', function(req, res) {
  res.send('Hello World');
});
// Start the server on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
// End of comments.js

// Path: comments.js
// Create web server
var express = require('express');
var app = express();
// Create a route for the root path
app.get('/', function(req, res) {
  res.send('Hello World');
});
// Create a route for the path /comments
app.get('/comments', function(req, res) {
  res.send('Comments');
});
// Start the server on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
// End of comments.js

// Path: comments.js
// Create web server
var express = require('express');
var app = express();
// Create a route for the root path
app.get('/', function(req, res) {
  res.send('Hello World');
});
// Create a route for the path /comments
app.get('/comments', function(req, res) {
  res.send('Comments');
});
// Create a route for the path /comments/1
app.get('/comments/1', function(req, res) {
  res.send('Comment 1');
});
// Start the server on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
// End of comments.js

// Path: comments.js
// Create web server
var express = require('express');
var app = express();
// Create a route for the root path
app.get('/', function(req, res) {
  res.send('Hello World');
});
// Create a route for the path /comments
app.get('/comments', function(req, res) {
  res.send('Comments');
});
// Create a route for the path /comments/1
app.get('/comments/1', function(req, res) {
  res.send('Comment 1');
});
// Create a route for the path /comments/2
app.get('/comments/2', function(req, res) {
  res.send('Comment 2');
});
// Start the server on port 3000
app.listen(3000, function)