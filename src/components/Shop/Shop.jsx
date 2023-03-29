import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getShoppingCart } from "../../utilities/fakedb.js";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step one get id of the product
    for (const id in storedCart) {
      // get product from products  state  by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step three  add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4 add the addedproduct to the saved cart
        savedCart.push(addedProduct);
      }
    }
    // step 5 set the cart
    setCart(savedCart);
  }, [products]);
  const handleAddToCart = (product) => {
    // console.log(product);
    // cart.push(product);
    // const newCart=[...cart,product]
    let newCart = [];
    let exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      // exists.quantity=exists.quantity+1;
      // const remaining=cart.filter(pd=>pd.id!==product.id)
      // newCart = [...remaining,product];

      alert('Player Already Exist')
      

    }
    setCart(newCart);
    addToDb(product);
  };

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
