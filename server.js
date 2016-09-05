var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/dist'));
app.use(require('./app/controllers/mainController'));

var server = app.listen(8080, 'localhost', function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})