import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let playerPrice=0;
    for (const product in cart){
        playerPrice=playerPrice+product.price;
        console.log(playerPrice)
    }
    return (
        <div className="cart">
            <h3>This is Player Summary</h3>
            <p>Name:{playerPrice}</p>
        </div>
    );
};

export default Cart;