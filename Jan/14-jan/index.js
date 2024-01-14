// console.log(1);
// console.log(2);

// setTimeout(()=>{
//   console.log(3)
// }, 0);

// console.log(4);
// setImmediate(()=>{
//   console.log(5);
// })
// console.log(6);

const http = require("http");
const products = require("./products.json");

const fs = require("fs");

// let data;
// fs.readFile("./products.json", "utf-8", (err, x) => {
// 	if (err) throw err;
// 	data = JSON.parse(x);
// 	// console.log(data);
// });

// CREATE SERVER

const server = http.createServer((req, res) => {
  // handler
  console.log(req.url);
  // res.write("Hello");
  // res.write(" Rishabh");
  // res.setHeader("Content-Type", "application/json");
  // res.write(JSON.stringify({ username: "rishabhpanesar" }));
  let message = `Welcome to `;
  switch (req.url) {
    case "/":
      message += "Home";
      res.setHeader("content-type", "text/html");
      res.write(`<h4>${message} page</h4>`);
      break;
    case "/products":
      message += req.url.split("").slice(1).join("");
      res.setHeader("content-type", "text/html");
      res.write(`<h4>${message} page</h4>`);
      res.write(`<div>
			${products.products?.map(
        (product) => `<div>
			  <p>
			  ${product.id} - ${product.name}
			  </p>
			  </div>`
      )?.join("")}
			</div>`);
      console.log(products);
      break;
    default:
      let htmlFile = fs.readFileSync(`${__dirname}/404.html`, "utf-8");
      res.setHeader("content-type", "text/html");
      res.write(htmlFile);
    // console.log(msg);
  }
  res.end();
  // res.write(`
  // <h4>Products</h4>
  // ${products?.forEach((item) => {
  // 	res.write(
  // 		`<div>
  // <span>${item.id} - ${item.name}</span>
  // </div>`
  // 	);
  // })}
  // `);
  // res.setHeader("content-type", "text/html");
  res.end();
});

// start listening to this server on the given port
const PORT = 3001;
server.listen(PORT, () => {
  console.log("server running on port:", PORT);
});