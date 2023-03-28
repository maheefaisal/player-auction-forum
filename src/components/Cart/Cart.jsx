import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let playerName=[];
    for (const product in cart){
       playerName=playerName.push[product.name]
    }
    return (
        <div className="cart">
            <h3>This is Player Summary</h3>
            <p>Name:{playerName}</p>
        </div>
    );
};

export default Cart;