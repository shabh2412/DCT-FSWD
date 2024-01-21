// res.write()

const { createServer } = require("http");
const fileSystem = require("fs");
const data = require("./products.json");

const customHeaders = [
  {
    key: "Content-Type",
    value: "application/json",
  }
];

const server = createServer(
  (req, res) => {
    console.log(req.url);
    const endpoint = req.url;
    // res.setHeader("Content-Type", "application/json");
    customHeaders?.forEach((headerObject) => {
      res.setHeader(headerObject?.key, headerObject?.value);
    });
    switch (endpoint) {
      case "/": {
        const message = { message: "hello" };
        res.write(JSON.stringify(message));
        break;
      }
      case "/products": {
        let body = "";
        if (req.method === "POST") {
          req.on("data", function (chunk) {
            body = body + chunk;
          });

          req.on("end", () => {
            console.log(body);
            const product_obj = JSON.parse(body);
            // console.log(typeof products);
            data?.products?.push(product_obj);
            fileSystem.writeFile("./products.json", JSON.stringify(data), "utf-8", (err) => {
              console.log("error while writing into products.json", err);
            });
            res.end(JSON.stringify(data?.products));
          });

        }
        else if (req.method === "GET") {
          res.end(JSON.stringify(data?.products));
        }
        // fileSystem.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
        //   if (err) {
        //     res.write(JSON.stringify({
        //       err,
        //     }));
        //   }
        //   res.write(data);
        //   res.end();
        // });
        break;
      }
      default: {
        res.write("page not found");
      }
    }
    res.end();
  }
);

// port
const PORT = 3010;

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});