import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../components/cardSlice";
import './Cart.css';

function Cart() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const cartItems = useSelector((state) => state.card.items);
  const dispatch = useDispatch();

  const totalValue = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.toString().replace('₹', '').replace(',', ''));
    return total + (price * item.quantity);
  }, 0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleProceedClick = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for purchasing! Your order has been placed.');
    setFormData({ name: '', email: '' });
    setShowForm(false);
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <p style={{ marginTop: "20px" }}>Your cart is empty.</p>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>₹{parseFloat(item.price.toString().replace('₹', '').replace(',', '')).toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-danger">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: ₹{totalValue.toFixed(2)}</h3>
      </div>
      <button onClick={handleProceedClick} className="btn btn-primary">
        Proceed
      </button>
      {showForm && (
        <div className="order-form">
          <h3>Order Details</h3>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
            </label>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
