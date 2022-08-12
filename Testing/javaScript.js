let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);

let http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("welcome to respose");
    res.end("Thank you");
  })
  .listen(8080);

console.log("hello world");
let cal = require("./node");
let x = 10;
let y = 5;
console.log("add :" + cal.add(x, y));
console.log("sub :" + cal.sub(x, y));
console.log("mul :" + cal.mul(x, y));
console.log("div :" + cal.div(x, y));

let http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("welcome to respose");
    res.end("Thank you");
  })
  .listen(8080);

//file
let http = require("http");
let fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("object.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
