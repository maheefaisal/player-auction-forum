import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let playerPrice = 0;
  let playerName = [];
  let playerCountry = [];
  for (const product of cart) {
    playerPrice = playerPrice + product.price;
    playerName = playerName.concat(product.name);
    playerCountry = playerCountry.concat(product.country);
  }

  return (
    <div className="cart">
      <h3>This is Player Summary</h3>
      <p>Name:{playerName}</p>
      <p>Country:{playerCountry}</p>
      <p>PlayerPrice:{playerPrice}</p>
    </div>
  );
};

export default Cart;
