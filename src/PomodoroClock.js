import React, { useState, useEffect } from "react";
import "./PomodoroClock.css";

const PomodoroClock = ({ cycles }) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {

    if (cycleCount === cycles) {
        // Time limit reached, stop the clock
        return;
      }
    const interval = setInterval(() => {

      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          if (isBreak) {
            setCycleCount(cycleCount + 1);
            console.log(cycleCount,cycles);
            // if (cycleCount === cycles) {
            //   // Time limit reached, stop the clock
            //   return;
            // }
          }
          setIsBreak(!isBreak);
          setMinutes(isBreak ? 25 : 5);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 10);
    return () => clearInterval(interval);
  }, [minutes, seconds, isBreak, cycleCount, cycles]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="pomodoro-container">
      <h1>Pomodoro Clock</h1>
      <div className="timer">
        <span>{formatTime(minutes)}</span>:
        <span>{formatTime(seconds)}</span>
      </div>
      <div className="session-type">{isBreak ? "Break" : "Work"}</div>
      <div className="cycle-count">Cycles: {cycleCount}</div>
    </div>
  );
};

export default PomodoroClock;
