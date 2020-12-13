import React, { useEffect, useState } from "react";
import getTime from "./hex-time";

function App() {
  const [showHex, setShowHex] = useState<boolean>(true);
  const [time, setTime] = useState<{ normal: string; hex: string }>({
    normal: "",
    hex: "",
  });

  useEffect(() => {
    // Start clock tick
    const tick = setInterval(() => {
      setTime(getTime(new Date()));
    }, 1000);

    return () => {
      // Clear interval on component unmount
      clearInterval(tick);
    };
  });

  return (
    <div className="clock" style={{ backgroundColor: `#${time.hex}` }}>
      <div className="clock-time" onClick={() => setShowHex(!showHex)}>
        {showHex ? <div className="gray">#</div> : null}
        <div className="clock-time-value">
          {(showHex ? time.hex : time.normal).split("").map((value, index) => {
            return (
              <span
                className={
                  "clock-time-value-character " + (value === ":" ? "gray" : "")
                }
                key={index}
              >
                {value}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
