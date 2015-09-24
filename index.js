var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var counter = 0;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/counter', function (req, res) {
  res.json({ counter : counter });
});

app.post('/counter', function (req, res) {
  counter = req.body.counter;
  res.json({ counter : counter });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});