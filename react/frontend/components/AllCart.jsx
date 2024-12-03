import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ACCESS_TOKEN } from "../constants";
// import "../style/css/Cart.css";  // Assurez-vous d'avoir un fichier CSS pour styliser le panier

function AllCart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);

      if (!token) {
        navigate('/Login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/cart/view/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCartItems(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erreur lors du chargement du panier');
        setLoading(false);
      }
    };

    fetchCart();
  }, [navigate]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };
  const total = calculateTotal();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.product_id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.total}</p>
              </div>
            </div>
          ))}
        </div>
      )}
       <h3>Total: {total.toFixed(2)}$</h3>
      <div className="cart-footer">
        <button onClick={() => navigate('/Checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default AllCart;
