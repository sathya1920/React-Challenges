import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (!is24HourFormat) {
        const amPm = hours>= 12 ? "AM" : "PM";
        hours = hours %12 || 12;
        return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')} ${amPm}`
    } else {
      return `${hours.toString().padStart(2, "0")} : ${minutes
        .toString()
        .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
    }
  };

  const handleFormat = (e) => {
    setIs24HourFormat(!is24HourFormat);
  };
  return (
    <div>
      <h1 className="m-5">Real-Time Clock</h1>
      <h2 className="m-5">{formatTime(time)}</h2>
      <button className="btn btn-primary m-5 p-2" onClick={handleFormat}>
        Switch to {is24HourFormat ? "12-Hour Format" : "24-Hour Format"}
      </button>
    </div>
  );
};

export default Time;
