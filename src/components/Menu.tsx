import { useState } from "react";
import { shareImage } from "../share";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  async function share() {
    setShowMenu(false);
    setTimeout(() => {
      shareImage();
    }, 100);
  }

  return (
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
          <div
            onClick={() => share()}
            className="menu-item"
            tabIndex={1}
            role="button"
          >
            Share
          </div>

          <a
            tabIndex={1}
            href="https://github.com/ninest/hexy-time"
            target="_blank"
            rel="noreferrer"
            className="menu-item"
            role="button"
          >
            GitHub
          </a>

          <div className="menu-item menu-item-version">
            {process.env.REACT_APP_BUILD_TIME}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
