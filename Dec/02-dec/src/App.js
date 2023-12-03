import React, { useState } from "react";
import "./App.css";

function App() {
  // const counter = 20;

  // function increment() {
  //   counter++;
  //   console.log(counter);
  //   return counter;
  // }
  // function decrement() {
  //   counter--;
  // }

  // using useState Hook
  const [counter, set_count] = useState(0); // => [ state, state_setter ]

  // 1. x = x + 1;
  // 2. x + 1;
  // 3. x++;

  const user = {
    name: "rishabh",
    age: 10,
  };

  const [obj, set_obj] = useState(user);

  // function increment() {
  //   set_count(counter + 1);
  //   set_count((prevValue) => prevValue + 1);
  //   const temp = obj;
  //   temp.age = temp.age + 1;
  //   console.log(obj);
  //   set_obj(temp);
  //   console.log(temp);
  //   // console.log(counter + 1);
  // }
  // function increment() {
  //   set_count(counter + 1);
  //   set_count((prevValue) => prevValue + 1);
  //   console.log(obj);
  //   set_obj((prevValue) => {
  //     const temp = prevValue;
  //     temp.age++;
  //     return temp;
  //   });
  //   console.log(obj);
  //   // console.log(temp);
  //   // console.log(counter + 1);
  // }
  // this is arrow function extracted into a variable for reusability.
  const increment_callback = (prevValue) => {
    return prevValue + 1;
  };

  const increment = () => {
    set_count(increment_callback);
  };

  const decrement = () => {
    set_count((purnaValue) => {
      return purnaValue - 1;
    });
  };



  return <div>
    <h1 style={
      {
        border: "1px solid red",
        textAlign: "center",
      }
    } >
      Counter App
    </h1>

    <h1>Age {obj.age}</h1>

    <h2> {counter} </h2>
    <div>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  </div>;
}

export default App;