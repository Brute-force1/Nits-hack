import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div id="logo">
        {" "}
        <h3>App</h3>
      </div>
      <nav id="navbar">
        <Link to="/tracking">Track</Link>
        <Link to="/reward">Reward</Link>
      </nav>
      <div id="login">
        <button>SignIn</button>
        <button>LogIn</button>
      </div>
    </header>
  );
};

export default Header;
