import React, { useState } from "react";
import Clock from "./components/Clock";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    // Close menu (if open) when anything clicked
    <main onClick={() => (showMenu ? setShowMenu(false) : null)}>
      <Clock />
      <div className="three-dot">
        <button
          className="three-dot-button button button-icon"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
            <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" />
          </svg>
        </button>
        {showMenu && (
          <div className="menu">
            <div className="menu-item" tabIndex={1}>
              Share
            </div>

            <a
              tabIndex={1}
              href="https://github.com/ninest/hexy-time"
              target="_blank"
              rel="noreferrer"
              className="menu-item"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
