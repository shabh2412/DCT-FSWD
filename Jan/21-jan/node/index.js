const http = require("http");

const fs = require("fs");

// import productsJson from "./public/products.json";
const productsJson = require("./public/products.json");

const server = http.createServer((request, response) => {
  // Routes 
  console.log(request.url);
  switch (request.url) {
    case "/products/": {
      console.log("in products route");
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(productsJson));
      break;
    }
    case "/users/": {
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(productsJson));
      break;
    }
    default: {
      response.setHeader("Content-Type", "application/json");
      response.end("{error: 'Invalid Path'}");
    }
  }
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});