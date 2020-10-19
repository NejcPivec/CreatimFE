import React from "react";
import logo from "../images/logo.png";

import "../style/Navbar.css";

const Navbar = () => {
  const openNavHandler = () => {
    document.getElementById("open-nav").style.display = "flex";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "flex";
  };

  const closeNavHandler = () => {
    document.getElementById("open-nav").style.display = "none";
    document.getElementById("open").style.display = "flex";
    document.getElementById("close").style.display = "none";
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="flex-row allways-open">
            <img src={logo} alt="Creatim-logo" />
            <i onClick={openNavHandler} id="open" className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      <div id="open-nav" className="open-nav">
        <div className="container">
          <div className="flex-row">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <i
              onClick={closeNavHandler}
              id="close"
              className="fas fa-times"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
