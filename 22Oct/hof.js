const arr = "APPLE,BANANA,MANGO,LITCHI,GUAVA,DRAGONFRUIT".split(",");
// const arr = [23, 23, 23, 23, 2, 31, 21, 5435, 4, 34, 3, 23, 2];
// console.log(arr);
// MAP - returns another array of the same length by looping on the given arr
const mapped_arr = arr.map(function (el, idx) {
  // console.log(el, idx);
  // if (el !== "BANANA") return el + " is my fav fruit";
  return el + " is my fav fruit";
});
// console.log("mapped_arr", mapped_arr);
// FOREACH
const forEachArr = arr.forEach(function (el, idx, current_arr) {
  // console.log(el + " is my fav fruit");
});
// console.log("forEachArr", forEachArr);

// FILTER
const even_result = arr.filter(function (el, idx) {
  if ((idx + 1) % 2 === 0) return el;
});
// console.log('even_result', even_result);

const students = [
  { name: "Rishabh", age: 28 },
  { name: "Arun", age: 2 },
  { name: "Pritesh", age: 19 },
  { name: "Arun", age: 100 },
  { name: "Balak", age: 0 },
];

const odd_num = students.map(function (el, idx) {
  // if (el.age % 2 === 0) return (el);
  return el.age;
});

// console.log("odd_num", odd_num);
// REDUCE
/*
arr.reduce( callback Fn, startingValue )
callback Fn => 
    parameters : (prev Value, current Value)
    return : next Value
 */

// const ages = [12, 3, 4, 99, 1, 15];
// const sum = ages.reduce(function (prev, current) {
//   console.log({ prev, current });
//   const next_value = prev + current;
//   console.log({ next_value });
//   return next_value;
// }, 7);
// console.log(sum);

// const age_total = students.reduce(function (pichla_element, current_element) {
//   console.log({ prev: pichla_element, current: current_element });
//   const agla_element = pichla_element + current_element.age;
//   console.log({ next: agla_element });
//   return agla_element;
// }, 0);

// console.log(age_total / students.length);


// SORT
console.log(students);
students.sort(function (a, b) {
  console.log("i am a", a);
  console.log("i am b", b);
  console.log("i am a - b", a.age - b.age);
  return b.age - a.age;
});
console.log(students);


// const person = {
//   name: "rishabh",
//   age: 12,
//   gender: "male",
//   address: "india"
// };

// console.log(Object.entries(person));

// Object.entries(person).forEach(function (val) {
//   console.log("key: ", val[0], "value:", val[1]);
// });

// console.log("result", result);