interface Time {
  hex: string;
  normal: string;
}

/**
 * Get the time and hex time
 * @param {Date} date
 * @returns {[string, string]} time in hexadecimal, time in hh:mm:ss
 */
function getTime(date: Date): Time {
  const milliseconds = date.getMilliseconds();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  /* 
  Ratio of current time to 24 hours
  */
  const timeRatio =
    (hours + (minutes + (seconds + milliseconds / 1000) / 60) / 60) / 24;

  /* 
  Ratio of current time to hex
  - from 0 (000000) to 16777215 (FFFFFF)
  */
  const hexRatio = Math.round(timeRatio * 16777215);

  /* 
  Times to display
  */
  const normal = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  const hex = hexRatio.toString(16).padStart(6, "0").toUpperCase();

  return {
    hex,
    normal,
  };
}

function padZero(num: number): string {
  return num.toString().padStart(2, "0");
}

export default getTime;
