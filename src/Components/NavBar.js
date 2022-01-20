import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <img
        width="150"
        height="150"
        src="https://cdn1.vectorstock.com/i/thumb-large/85/70/fashion-hang-cloth-shop-logo-vector-5138570.jpg"
      ></img>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
