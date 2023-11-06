/**
 * Fetch
 * Try Catch 
 * Then Catch Finally
 * Fakestore API
 */

// ASYNC AWAIT
/**
 * then
 * catch 
 * finally
 * 
 * only write
 * try catch & async await
 */


// function calculate(a, b) {
//   return a + b;
// }

// const result = calculate(4, 5);
// console.log(result);

// async function multiply999NTimes(num) {
//   let product = 1;
//   for (let i = 1; i <= num; i++) {
//     product = product * 999;
//   }
//   // const result = await fetch("https://fakestoreapi.com/products/");
//   // console.log(result);
//   // const data = await result.json();
//   // console.log(data);
//   return product;
// }

// async function get_result() {
//   const result_promise = await multiply999NTimes(30);
//   console.log(`result of async function is`, result_promise);
// }

// multiply999NTimes(30);

// result_promise.then(function (result) {
//   console.log(`result of result_promise is`, result);
// });

async function get_data() {
  try {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log("hello not in timeout, but in get data!");
    return data;
  }
  catch (error_message) {
    console.log(`error_message: ${error_message}`);
    // return error_message;
  }
  /**
   * promise
   * data in json
   * readable stream
   * Response
  */
}

async function load_data() {
  // step 1: get the data from api
  const data = await get_data();
  // console.log("inside load data", data);
  // step 2: loop over the data and create cards
  // console.log(data);
  if (typeof data !== "undefined") {
    const arr = data?.map(function (current, index) {
      // console.log(index, current);
      const image = document.createElement("img");
      image.src = current?.image;
      const title = document.createElement("p");
      title.innerText = current.title;
      const card = document.createElement("div");
      card.append(image, title);
      return card;
    });
    console.log(arr);
    // step 3: append the cards in the DOM target element.
    const productsContainer = document.getElementById("productsContainer");
    // for (let i = 0; i < arr.length; i++) {
      //   productsContainer.append(arr[i]);
      // }
    // productsContainer.append(arr[0], arr[1], arr[2], arr[3]);
    productsContainer.append(...arr);
      
  }
}

load_data();

setTimeout(function () {
  console.log("hello in timeout");
}, 400);


console.log("hello not in timeout!");