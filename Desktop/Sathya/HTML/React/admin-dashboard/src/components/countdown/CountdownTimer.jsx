import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); // Time left in seconds
  const [isActive, setIsActive] = useState(false); // Timer status (Running or Not)
  const [isPaused, setIsPaused] = useState(false); // Check if paused
  const intervalRef = useRef(null);

  // Calculate the total time in seconds from hours, minutes, and seconds
  const calculateTotalTime = () => {
    return parseInt(hours * 3600) + parseInt(minutes * 60) + parseInt(seconds);
  };

  // Start the timer
  const startTimer = () => {
    const totalTime = calculateTotalTime();
    if (totalTime > 0 && !isActive) {
      setTimeLeft(totalTime);
      setIsActive(true);
      setIsPaused(false);
    }
  };

  // Pause the timer
  const pauseTimer = () => {
    if (isPaused) {
      // If the timer is paused, continue it
      setIsPaused(false);
    } else {
      // Pause the timer
      clearInterval(intervalRef.current);
      setIsPaused(true);
    }
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  // Countdown logic
  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
      alert("Time's up!");
    }

    return () => clearInterval(intervalRef.current); // Clean up the interval
  }, [isActive, isPaused, timeLeft]);

  // Format time (hh:mm:ss)
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>

      {/* Input fields for hours, minutes, and seconds */}
      <div className="input-fields">
        <input
          type="number"
          className="form-control m-2"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours"
          disabled={isActive} // Disable input when the timer is active
        />
        <input
          type="number"
          className="form-control m-2"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="Minutes"
          disabled={isActive} // Disable input when the timer is active
        />
        <input
          type="number"
          className="form-control m-2"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          placeholder="Seconds"
          disabled={isActive} // Disable input when the timer is active
        />
      </div>

      {/* Display the formatted time left */}
      <h2>{formatTime(timeLeft)}</h2>

      {/* Control Buttons */}
      <div>
        <button
          className="btn btn-success m-2"
          onClick={startTimer}
          disabled={isActive && !isPaused}
        >
          Start
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={pauseTimer}
          disabled={!isActive}
        >
          {isPaused ? "Continue" : "Pause"}
        </button>
        <button className="btn btn-danger m-2" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
