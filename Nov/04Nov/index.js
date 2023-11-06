const url = "https://fakestoreapi.com/products";

const products = [];

console.log("making a network request");
const products_promise = fetch(url);

products_promise.then(function (response) {
  console.log(response);
  const result = response.json();
  result.then(function (data) {
    products.push(...data);
    const productsContainer = document.getElementById("productsContainer");
    const cards = [];
    for (let i = 0; i < products?.length; i++) {
      const img = document.createElement("img");
      const currentProduct = products[i];
      img.src = currentProduct.image;
      const title = document.createElement("p");
      title.innerText = currentProduct.title;
      const card = document.createElement("div");
      card.append(img, title);
      cards.push(card);
    }
    productsContainer.append(...cards);
  });
});``

// products_promise.then(function (response) {
//   console.log("got a response");
//   console.log(response);
//   console.log("converting response to json");
//   const result = response.json();
//   result.then(function (data) {
//     console.log("converted response to json");
//     // console.log(...data);
//     // products = [...data]; // cover it on 05 nov
//     // products.push(data);
//     products.push(...data);
//     // console.log("products", products);
//     // select the product container
//     const productsContainer = document.getElementById("productsContainer");
//     const cards = [];
//     for (let i = 0; i < products?.length; i++) {
//       const card = document.createElement("div");
//       const img = document.createElement("img");
//       // console.log(products[i]);
//       const currentProduct = products[i];
//       img.src = currentProduct.image;
//       const title = document.createElement("p");
//       title.innerText = currentProduct.title;
//       card.append(img, title);
//       cards.push(card);
//     }
//     productsContainer.append(...cards);
//   });
// });
