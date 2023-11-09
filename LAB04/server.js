var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/sachin', function(req, res) {
  res.render('pages/sachin');
});

app.get('/sehwag', function(req, res) {
  res.render('pages/sehwag');
});

app.get('/dhoni', function(req, res) {
  res.render('pages/dhoni');
});

app.listen(8080);
console.log('Server is listening on port 8080');