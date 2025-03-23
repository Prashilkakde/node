const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/newPage") {
    res.end("New page");
  }
  res.end("Hello World");
});

server.listen(8080);
