var http = require('http');
var fs = require('fs');
var server = http.createServer();


server.on("request", function(request, response) {
    if (request.method === "GET" && request.url === "/treasure") {
      console.log("robie to");
      fs.readFile("index.html", "utf-8", function(err, data) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      });
    } else {
      fs.readFile("./img/404.jpg", "binary", function(err, data) {
        response.writeHead(404, { "Content-Type": "image/jpeg" });
        response.end(data, "binary");
      });
    }
});

server.listen(8080);
