import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [is24HoursFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleFormat = () => {
    setIs24HourFormat(!is24HoursFormat);
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (!is24HoursFormat) {
      //12 hour format
      const amPm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;
    } else {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div>
      <h1 className="m-5">Real-Time Clock</h1>
      <h2 className="m-5 text-primary">{formatTime(time)}</h2>
      <button className="btn btn-primary w-25 m-5 p-2" onClick={toggleFormat}>
        Switch to {is24HoursFormat ? "24-Hour Format" : "12-Hour Format"}
      </button>
    </div>
  );
};

export default Clock;
