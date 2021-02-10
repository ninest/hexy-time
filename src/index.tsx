import React from "react";
import ReactDOM from "react-dom";
import "./styles/root.scss";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers: https://cra.link/PWA
process.env.NODE_ENV === "development"
  ? serviceWorkerRegistration.unregister()
  : serviceWorkerRegistration.register({
      onUpdate: (registration) => {
        console.log("An update is available!")
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
        // window.location.reload();
      },
    });
