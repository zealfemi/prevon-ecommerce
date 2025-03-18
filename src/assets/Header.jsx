import React, { useState } from "react";
import PrevonLogo from "./icons/prevonLogo";
import Cart from "./icons/cart";
import DarkMode from "./icons/darkMode";
import LightMode from "./icons/lightMode";

import { Link } from "react-router-dom";

function Header(mode) {
  const docBody = document.querySelector("html");

  const [viewMode, setViewMode] = useState([mode]);

  function switchMode() {
    setViewMode((prevMode) => {
      return !prevMode;
    });

    if (viewMode) {
      docBody.classList.add("dark");
    } else {
      docBody.classList.remove("dark");
    }
  }

  return (
    <>
      <header className="bg-primary flex items-center h-16 sm:h-24">
        <nav className="container flex justify-between items-center mx-auto p-4">
          <Link to="/">
            <div className="text-white sm:flex flex-col items-end hidden">
              <span className="font-semibold text-4xl -tracking-widest">
                PREVON
              </span>
              <span className="text-xs">eCommerce</span>
            </div>

            <div className="sm:hidden flex gap-2 items-center">
              <PrevonLogo />{" "}
              <span className="font-semibold text-3xl text-white -tracking-widest">
                PREVON
              </span>
            </div>
          </Link>
          <nav className="flex justify-center gap-4 sm:gap-7">
            <Cart />
            <span className="cursor-pointer" onClick={switchMode}>
              {viewMode ? <LightMode /> : <DarkMode />}
            </span>
          </nav>
        </nav>
      </header>
    </>
  );
}

export default Header;
