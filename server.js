//var config = require("./config.js")();
var port    = 8888;
var express = require('express'); // Express web server framework
var app     = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(port, function(){
  var url = "http://localhost:"+port;
  console.log('Node serving at '+url);
});