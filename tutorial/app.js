
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// **************** Configuration ******************
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// ***********  Routes **********************
//app.get('/', routes.index);

// respond with "Hello World!" on the homepage. Homepage is denoted by "/". Bascalll
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// all() method is not a HTTP method. It is used for loading middleware at a path for all request methods.
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
// *** Matching requests based on STRINGS *****
// will match requests to /about
app.get('/about', function (req, res) {
  res.send('about');
});

// will match request to /random.text
app.get('/random.text', function (req, res) {
  res.send('random.text');
});

// **** Matching Requests based on STRING PATTERNS ******
// will match acd and abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

// will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

// will match /abe and /abcde
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});

// ******* Matching Requests with REGULAR EXPRESSIONS *******
// will match anything with an 'a' in the route name:
app.get(/a/, function(req, res) {
  res.send('/a/');
});

// will match butterfly, dragonfly; but not butterflyman, dragonfly man, and so on in the route name
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
