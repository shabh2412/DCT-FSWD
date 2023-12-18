import { Button } from "./Button";

export const TimerFooter = ({
  timerRunning,
  handleStart,
  pauseTimer,
  resetTimer
}) => {
  return (
    <div className="row">
      <div className="col-4 col-sm-2 col-md-2">
        {!timerRunning ? (
          <Button
            handleClick={() => {
              handleStart();
            }}
          >
            START
          </Button>
        ) : (
          <Button
            handleClick={() => {
              pauseTimer();
            }}
          >
            STOP
          </Button>
        )}
      </div>
      <div className="col-4 col-sm-2 col-md-2">
        <Button
          colorCode="btn-light"
          handleClick={() => {
            resetTimer();
          }}
        >
          RESET
        </Button>
      </div>
    </div>
  );
};
