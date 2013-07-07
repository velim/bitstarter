var fs = require('fs');
var express = require('express');
var buffer = new Buffer(255);
var content;

var app = express.createServer(express.logger());

fs.readFileSync('index.html', function (err, data){
 content = data;
});

buffer.write(content);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
