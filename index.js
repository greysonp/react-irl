var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('React IRL listening on port '  + port + '!');
});
