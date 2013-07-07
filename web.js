var express = require('express');
var buffer = new Buffer(255);

var app = express.createServer(express.logger());



app.get('/', function(request, response) {
  response.send(buffer.toString(fs.readFileSync('index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
