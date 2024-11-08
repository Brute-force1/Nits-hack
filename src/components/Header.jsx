import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div id="logo">
        {" "}
        <h3>App</h3>
      </div>
      <nav id="navbar">
        <h3>For Parents</h3>
        <h3>For chidren</h3>
      </nav>
      <div id="login">
        <button>SignIn</button>
        <button>LogIn</button>
      </div>
    </header>
  );
};

export default Header;
