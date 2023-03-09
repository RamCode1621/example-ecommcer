import React, { useState, useEffect, FC } from "react";
import "./index.css";
import ShoppingCartIcon from "../../assets/shopping-cart.png";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const onClick = () => {};
  const { cart } = useSelector((state: any) => state.shoppingCart);
  return (
    <div className="header-shopping-cart-content" onClick={onClick}>
      <div className="header-shopping-cart-content-icon">
        <img
          className="header-shopping-cart-icon"
          src={ShoppingCartIcon}
          alt="shopping-cart"
        />
      </div>
      <div className="header-shopping-cart-count">
        <strong>{cart.length}</strong>
      </div>
    </div>
  );
};

const Header = () => {
  const [logo, setLogo] = useState(
    "https://imgs.search.brave.com/1PX49BE1nFTLlIi_50IJqEo8Je-phA-GHG6svP_UKv8/rs:fit:700:222:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvZWNvbW1l/cmNlLWxvZ28tcG5n/LTExLnBuZw"
  );

  return (
    <div className="header-content">
      <div className="header-content-logo">
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <div className="header-content-navigation">
        <div className="header-navigation">
          <div className="header-navigation-link round-left">Home</div>
          <div className="header-navigation-link">About</div>
          <div className="header-navigation-link">Store</div>
          <div className="header-navigation-link">Blog</div>
          <div className="header-navigation-link round-right">Contact</div>
        </div>
        <div className="shoppingCart">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
