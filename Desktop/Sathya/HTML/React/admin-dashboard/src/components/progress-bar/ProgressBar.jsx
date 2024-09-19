import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startProgress =()=>{
    if(!isRunning){
        setIsRunning(true);
        setProgress(0);
    }
  };

  useEffect(()=>{
    let timer;
    
    if(isRunning && progress<100){
        timer = setInterval(()=>{
            setProgress(prev=>prev+1);
        },100);
    }else if(progress>=100){
        setIsRunning(false);
    }

    return ()=>clearInterval(timer);
  },[isRunning, progress]);


  return (
    <div className="progress-container">
      <h3>Progress Bar</h3>
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
      <button
        onClick={startProgress}
        className="start-btn"
        disabled={isRunning}
      >
        Start
      </button>
    </div>
  );
};

export default ProgressBar;
