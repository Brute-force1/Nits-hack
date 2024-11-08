import React from "react";
import { navbar } from "../utils/index";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container--head">
        <Link to="/" className="nav--logo">
          <img src="" alt="" />
          <span>Brute Force</span>
        </Link>

        <div className="">
          <nav className="nav--bar">
            {navbar.map((item) => (
              <Link key={item.id} className="nav--link" to={item.link}>
                {item.text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="nav--bar">
          <Button>Sign Up</Button>

          <Button>Log in</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
