import React from "react";
import "./Header.css";
import logo from "./one-removebg-preview.png";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">Shop</a>
        <a href="/name">Name</a>
        <a href="/price">Price</a>
        <a href="/blog">Blog</a>
      </div>
    </nav>
  );
};

export default Header;
