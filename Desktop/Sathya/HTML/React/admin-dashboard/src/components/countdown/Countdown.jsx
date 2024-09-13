import React, { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPause,setIsPause] = useState(false);
  const intervalRef = useRef(null);
  
  const calculateTotalTimeInSec = () => {
    return parseInt(hours * 3600) + parseInt(minutes * 60) + parseInt(seconds);
  };
  
  const startTimer = () => {
    const totalTime = calculateTotalTimeInSec();
    if(totalTime>0){
        setTimeLeft(totalTime);
        setIsActive(true);
        setIsPause(false);
    }
  };
  const pauseTimer = () => {
    

    if(isPause){
        setIsPause(false);
    }else{
        clearInterval(intervalRef.current);
        setIsPause(true);
    }
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTimeLeft(0);
    setIsPause(false);
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  useEffect(()=>{
    if(isActive &&  !isPause && timeLeft>0){
        intervalRef.current = setInterval(()=>{
            setTimeLeft(prevTime => prevTime-1);
        },1000);
    }else if(isActive && timeLeft ===0){
        clearInterval(intervalRef.current);
        setIsActive(false);
        alert("Time's Up")
    }

    return ()=> clearInterval(intervalRef.current);
  },[isActive,timeLeft,isPause]);




  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds %3600) / 60);
    const secs = totalSeconds % 60;

    return `${hrs.toString().padStart(2,'0')} : ${mins.toString().padStart(2,'0')} : ${secs.toString().padStart(2,'0')}`
  };
  return (
    <div className="m-5">
      <h1 className="m-5">Countdown Timer</h1>
      <form className="form-group">
        <input
          type="number"
          placeholder="Hours"
          className="form-control w-25 m-3"
          value={hours}
          disabled={isActive}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type="number"
          className="form-control w-25 m-3"
          placeholder="Minutes"
          value={minutes}
          disabled={isActive}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          type="number"
          className="form-control w-25 m-3"
          placeholder="Seconds"
          value={seconds}
          disabled={isActive}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </form>

      <h2 className="m-5 text-primary">{formatTime(timeLeft)}</h2>

      <div className="w-25 m-3 d-flex align-items-center justify-content-evenly">
        <button
          className="btn btn-success"
          disabled={isActive && !isPause}
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="btn btn-warning"
          
          onClick={pauseTimer}
        >
          {isPause ? "Continue" : "Pause"}
        </button>
        <button 
          className="btn btn-danger"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Countdown;
