function a() {
  // console.log("hi");
  var count = 1;
  console.log(count);
  function increment() {
    count = count + 1;
    console.log(count);
  };
  function decrement () {
    count = count - 1;
    console.log(count);
  }
  return {
    increment: increment,
    decrement: decrement
  }
  // increment();
}

const returned_function = a();

// returned_function();
returned_function.increment()
returned_function.increment()
returned_function.increment()
returned_function.decrement();
returned_function.increment()

// console.log(count);