var fs = require('fs');
var express = require('express');
var buffer;
var content;

var app = express.createServer(express.logger());

fs.readFileSync('index.html', function read(err, data){
 content = data;
});

buffer = new Buffer(content)

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8',0,len);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
