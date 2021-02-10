import React, { useEffect, useState } from "react";
import getTime from "../hex-time";

function Clock({ textGlow }: { textGlow: boolean }) {
  const [showHex, setShowHex] = useState<boolean>(true);
  const [time, setTime] = useState<{ normal: string; hex: string }>(
    getTime(new Date())
  );

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

  useEffect(() => {
    // style={{ backgroundColor: `#${time.hex}` }}
    document.body.style.backgroundColor = `#${time.hex}`;
  }, [time.hex]);

  return (
    <div className="clock">
      <div className="clock-time" onClick={() => setShowHex(!showHex)}>
        {showHex ? <div className="hash">#</div> : null}
        <div className={`clock-time-value ${textGlow && "clock-time-glow"}`}>
          {(showHex ? time.hex : time.normal).split("").map((value, index) => {
            return (
              <div
                className={
                  "clock-time-value-character " + (value === ":" ? "colon" : "")
                }
                key={index}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clock;
