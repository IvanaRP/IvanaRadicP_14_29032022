import React from "react";
import logo from "../../assets/logo.jpeg";
import "../../styles/header.css";

function Header() {
  return (
    <div className="headContainer">
      <div className="headContainer-logo">
        <img src={logo} alt="Logo" className="head-logo" />
      </div>
    </div>
  );
}

export default Header;
