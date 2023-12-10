import React, { useEffect, useRef, useState } from "react";

function Stopwatch() {
  const intervalId = useRef(null);
  console.log(intervalId);
  const [seconds, set_seconds] = useState(0);
  const start_counting = () => {
    if (intervalId.current === null) {
      intervalId.current = setInterval(
        () => {
          set_seconds((prev) => prev + 1);
        },
        1000
      );
    }
    else {
      // alert("stopwatch is already running");
      console.log("stopwatch is already running");
    }
  };

  const stop_counting = () => {
    console.log(`Stopping interval with id: ${intervalId.current}`);
    clearInterval(intervalId.current);
    intervalId.current = null;
  };
  const reset_count = () => {
    stop_counting();
    set_seconds(0);
  };

  // useEffect(()=>{},[])

  return <div>
    <h1>Stopwatch</h1>
    <div>
      <div>
        <p>{seconds} sec</p>
      </div>
      <div style={{
        display: "flex",
        gap: "4px",
        alignItems: "center",
      }}>
        <button onClick={start_counting} >Start</button>
        <button onClick={stop_counting} >Stop</button>
        <button onClick={reset_count} >Reset</button>
      </div>
    </div>
  </div>;
}

export default Stopwatch;