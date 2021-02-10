import { useEffect, useState } from "react";
import Clock from "./components/Clock";
import Menu from "./components/Menu";

function App() {
  const [textGlow, setTextGlow] = useState(false);

  /* Request wake lock */
  useEffect(() => {
    if ("wakeLock" in navigator) {
      // @ts-ignore
      navigator.wakeLock
        .request("screen")
        .then(() => {
          console.log("Wake lock activated!");
          setTextGlow(true);

          setTimeout(() => {
            setTextGlow(false);
          }, 2500);
        })
        .catch(() => {
          console.log("No wake lock");
          setTextGlow(false);
        });
    }
  }, []);

  return (
    <main>
      <Clock textGlow={textGlow} />
      <Menu />
    </main>
  );
}

export default App;
