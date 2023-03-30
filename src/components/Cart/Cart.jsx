import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let playerPrice = 0;

  let playerCountry = [];
  for (const product of cart) {
    playerPrice = playerPrice + product.price;
    playerCountry = playerCountry.concat(product.country);
  }
console.log(cart)
  return (
    <div className="cart">
      <h3>This is Player Summary</h3>
      <h5>Name:{
        cart.map(pd=> <p >{pd.name}</p>)
        }</h5>
      <h5>Country:{
        cart.map(pd=> <p >{pd.country}</p>)
        }</h5>
      
      <p><span>PlayerPrice:</span> {playerPrice}</p>
    </div>
  );
};

export default Cart;
