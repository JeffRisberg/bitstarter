var fs = require('fs');
var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var buffer = fs.readFileSync("index.html");
  response.send(buffer.toString());
})

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
})
