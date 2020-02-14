var http = require('http');
var fs =require('fs');

var server = http.createServer(function(req, res) {
	console.log("URL страницы: "+ req.url);
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	if(req.url==="/index" || req.url==="/"){
	res.end('Server work')
}
});
server.listen(3000, '127.0.0.1');
