import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { TimerFooter } from "./TimerFooter";
import { TimerHeader } from "./TimerHeader";

export const Timer = () => {
  const startedSec = useRef(null);
  const startedMSec = useRef(null);
  const [timerRunning, setTimerRunning] = useState(false);

  const [timerSecond, setTimerSecond] = useState(0);
  const [timerMilliSecond, setTimerMilliSecond] = useState(0);

  const handleStart = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      startedSec.current = setInterval(() => {
        setTimerSecond((prev) => prev + 1);
        console.log(timerSecond);
      }, 1000);
      startedMSec.current = setInterval(() => {
        setTimerMilliSecond((prev) => {
          if (prev === 99) prev = 0;
          else prev += 1;
          return prev;
        }, 100);
      });
    }
  };

  const pauseTimer = () => {
    clearInterval(startedSec.current);
    clearInterval(startedMSec.current);
    setTimerRunning(false);
  };

  const resetTimer = () => {
    pauseTimer();
    setTimerSecond(0);
    setTimerMilliSecond(0);
    startedSec.current = null;
    startedMSec.current = null;
  };

  useEffect(() => {
    const cleanup = () => {
      console.log("performing cleanups");
      resetTimer();
    };
    return cleanup;
  }, []);

  return (
    <div className="card bg-dark text-white">
      <TimerHeader />
      <div className="card-body">
        <div className="row">
          <div className="col">
            <p className="text-start display-2 fw-bold">
              {timerSecond}
              <span className="display-6" style={{ fontSize: "1.5rem" }}>
                s
              </span>{" "}
              <span className="display-6 fw-normal">
                {timerMilliSecond < 10
                  ? "0" + timerMilliSecond
                  : timerMilliSecond}
              </span>
            </p>
          </div>
        </div>
        <TimerFooter
          timerRunning={timerRunning}
          handleStart={handleStart}
          pauseTimer={pauseTimer}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
};
