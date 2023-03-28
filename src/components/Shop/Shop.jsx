import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([])

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart=(product)=>{
    // console.log(product);
    // cart.push(product);
    // const newCart=[...cart,product]
    let newCart=[];
    let exists=cart.find(pd=>pd.id===product.id);
    if(!exists){
        product.quantity=1;
        newCart=[...cart, product];
    }
    else{
        exists.quantity=exists.quantity+1;
        const remaining=cart.filter(pd=>pd.id!==product.id)
        newCart = [...remaining,product];
    }
    setCart(newCart);
    addToDb(product);
  }

  return (
    <div className="shopContainer">
      <div className="productContainer">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cartContainer">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
