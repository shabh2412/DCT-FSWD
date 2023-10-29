// const myPromise = new Promise(function (resolve, reject) {
//   console.log(resolve);
//   console.log(reject);
// });

// const myPromise_will_reject = new Promise(function (resolve, reject) {
//   function sayHello() {
//     try {
//       console.log("hello");
//       // resolve("This promise is resolved!");
//       throw new Error("some error occured");
//       // reject("some error occured");
//     }
//     catch (error) {
//       reject(error);
//     }
//   }
//   setTimeout(sayHello, 3000);
// });

// const myPromise_rejects = new Promise(function (resolve, reject) {
//   try {
//     console.log("hello");
//     // resolve("This promise is resolved!");
//     throw new Error("some error occured");
//     // reject("some error occured");
//   }
//   catch (error) {
//     reject(error);
//   }
// });

// const myPromise_will_never_reject_or_resolve = new Promise(function (resolve, reject) {
//   try {
//     function sayHello() {
//       console.log("hello");
//       // resolve("This promise is resolved!");
//       throw new Error("some error occured");
//       // reject("some error occured");
//     }
//     setTimeout(sayHello, 3000);
//   } catch (error) {
//     reject(error);
//   }
// });


let loading = false;

const myPromise_fulfills = new Promise(function (resolve, reject) {
  loading = true;
  const user = {
    name: "Arun",
    age: 65,
  };
  function sendUserData() {
    resolve(user);
  }
  // setTimeout(sendUserData, 5000);
  function reject_request() {
    try {
      // const x = 10;
      // console.log(x);
      throw new Error("not authenticated");
    } catch (error) {
      reject(error);
    }
  }
  setTimeout(reject_request, 5000);
});

myPromise_fulfills?.then(function (result) {
  console.log(result);
}).catch(function (rejected_reason) {
  console.log(rejected_reason);
}).finally(function () {
  loading = false;
  console.log('');
});

// console.log("inside promises.js")

// let seconds = 0;

// function increaseSeconds() {
//   seconds++;
//   console.log(seconds);
// }

// const id = setInterval(increaseSeconds, 1000);

// function stopInterval() {
//   clearInterval(id);
// }

// setTimeout(stopInterval, 5000);

// console.log(`setInterval : ${id}`);

// Promises
// Try Catch 
// Then 