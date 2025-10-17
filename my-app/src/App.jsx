import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchData() {
    const result = await fetch("https://fakestoreapi.com/products");
    const response = await result.json();
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Already in the cart");
    } else {
      setCart([...cart, product]);
 }
  }

  return (
    <div>
      <h1 className="main-heading">🛍 Product Store</h1>
      <div className="container">
        {data.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>₹ {item.price}</h4>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2 className="cart-header">🛒 Cart Details</h2>
        <p>Items in cart: {cart.length}</p>
        <div className="container">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <h4>₹ {item.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;