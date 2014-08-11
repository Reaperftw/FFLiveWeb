var http = require('http');
var ipaddr = '192.168.2.18';
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(1337, ipaddr);
console.log('Server running at ' + ipaddr);
