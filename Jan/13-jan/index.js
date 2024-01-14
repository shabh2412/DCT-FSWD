const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(req.method);
  const method = req.method;

  if (method === "GET") {
    switch (req.url) {
      case "/users": {
        res.end(JSON.stringify({ users: ["arun", "pritesh", "kaustubh", "mayuresh"] }));
        break;
      }
      case "/products": {
        fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
          res.end(data);
        });
        break;
      }
      default: {
        res.end(JSON.stringify({ message: "invalid endpoint" }));
      }
    }
  }
  else if (method === "POST") {
    let body = '';
    req.on("data", function (chintu) {
      body += chintu;
    });
    // console.log(body);
    req.on("end", function () {
      console.log(body);
    });
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
      case "/users": {
        res.end(JSON.stringify({ users: ["arun", "pritesh", "kaustubh", "mayuresh"] }));
        break;
      }
      case "/products": {
        fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
          res.end(data);
        });
        break;
      }
      default: {
        res.end(JSON.stringify({ message: "invalid endpoint" }));
      }
    }
  }

  // console.log(res);
  // res.end(JSON.stringify({ "name": "x" }));
});

const PORT = 3500;

server.listen(PORT, () => {
  console.log("started server on port", PORT);
});