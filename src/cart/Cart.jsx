import React, { useEffect, useState } from "react";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("ft_cart");
    setCartItems(raw ? JSON.parse(raw) : []);
  }, []);

  // Update qty (+ or -)
  const updateCart = (id, delta) => {
    const updated = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, qty: Math.max((item.qty || 1) + delta, 0) }
          : item
      )
      .filter((item) => item.qty > 0);

    setCartItems(updated);
    localStorage.setItem("ft_cart", JSON.stringify(updated));

    // 🔥 Notify other pages (like Mainpage) to update cart count
    window.dispatchEvent(new Event("ft_cart_updated"));
  };

  // Remove item entirely
  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("ft_cart", JSON.stringify(updated));

    // 🔥 Trigger cart count update
    window.dispatchEvent(new Event("ft_cart_updated"));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.Price * (item.qty || 1),
    0
  );

  const delivery = subtotal > 0 ? 40 : 0;
  const total = subtotal + delivery;

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>🛒 Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty 😕</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Delicious {item.name} freshly prepared for you!</p>

                <div className="price">
                  ₹{item.Price} × {item.qty} = ₹{item.Price * item.qty}
                </div>

                <div className="quantity">
                  <button onClick={() => updateCart(item.id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateCart(item.id, 1)}>+</button>
                </div>
              </div>

              <button className="remove" onClick={() => removeItem(item.id)}>
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="cart-right">
        <div className="summary-box">
          <h3>Order Summary</h3>
          <div className="row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="row">
            <span>Delivery Fee</span>
            <span>₹{delivery}</span>
          </div>
          <div className="total-row">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>
          <button
            className="checkout-btn"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
