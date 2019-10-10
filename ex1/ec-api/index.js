var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('ec-api v0.1');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
