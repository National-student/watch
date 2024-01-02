import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const milliseconds = time.getMilliseconds().toString().padStart(3, "0");
  return (
    <div>
      <h1 style={{fontSize: "70px"}}>{`${hours}:${minutes}:${seconds}:${milliseconds}`}</h1>
    </div>
  );
};

export default Clock;
