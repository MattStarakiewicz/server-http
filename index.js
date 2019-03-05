var http = require('http');
var fs = require('fs');
var server = http.createServer();

/*
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

*/

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/treasure') {
        fs.readFile('index.html', 'utf-8', function(err, data) {
   		 response.write(data);
   		 response.end();
		});
    } else {
            //response.statusCode = 404;
            fs.readFile('./img/404.jpg', 'image/jpeg', function(err, data) {
   			response.write('<img src="' + data + '" alt=" error 404">');
   		 	response.end();
			});
    }
});

server.listen(8080);

/*

fs.readFile('./treasure',  function(err, data) {
    response.write('<img src="' + data + '" alt="treasure">');
    response.end();
}

*/