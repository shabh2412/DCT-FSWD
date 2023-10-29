// Browser APIs
function sayHello() {
  console.log("hello!");
}

sayHello();
sayHello();
sayHello();
sayHello();

setTimeout(sayHello, 5000);

sayHello();
sayHello();
sayHello();
sayHello();

function reload(name) {
  console.log('reload', name);
}

const my_interval = setInterval(reload, 1000);
console.log(my_interval);

function stop_interval() {
  console.log("stopping interval");
  clearInterval(my_interval);
}

setTimeout(stop_interval, 10000);

// Custom APIs
