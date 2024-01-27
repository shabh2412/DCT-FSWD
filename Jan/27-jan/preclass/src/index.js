const express = require("express");

const app = express();

// const data = [1, 2, 3, 4];
const products = [
  { id: 1, name: "P1", price: 1000 },
  { id: 2, name: "P2", price: 2000 },
  { id: 3, name: "P3", price: 3000 },
  { id: 4, name: "P4", price: 4000 },
  { id: 5, name: "P5", price: 5000 },
  { id: 5, name: "P1", price: 1000 },
  { id: 6, name: "P1", price: 1000 },
  { id: 7, name: "P2", price: 600 },
  { id: 8, name: "P3", price: 1600 },
];

// REST Methods: 
// GET 
app.get("/", (req, res) => {
  // res.write(JSON.stringify(data));
  // res.end();
  // res.send(data);
  // res.send(products);
  const id = req.query?.id;
  const name = req.query?.name;
  const price = req.query?.price;
  const filtered_products = products?.filter((p) => {
    if (id) {
      return p.id === parseInt(id);
    }
    if (name) {
      return p.name === name;
    }
    if (price) {
      return p.price === parseInt(price);
    }
    return true;
  });

  res.send(filtered_products);

});

// path params
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const numId = parseInt(id);
  const product = products?.find(prod => prod.id === numId);
  res.send(product);
});

// POST
// DELETE
// PUT
// PATCH



const PORT = 8000;

app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
});