let http = require("https");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("welcome to respose");
    res.end("Thank you");
  })
  .listen(5500);
