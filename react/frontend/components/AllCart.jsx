import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ACCESS_TOKEN } from "../constants";
import "../style/css/Cart.css";  // Assurez-vous d'avoir un fichier CSS pour styliser le panier

function AllCart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false); // Pour gérer l'erreur d'image
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
            Authorization: `Bearer ${token}`,
          },
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

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleImageError = () => {
    setImageError(true); // Changer l'image si erreur
  };

  // Calcul du total final du panier
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  const total = calculateTotal();

  return (
    <div className="cart-container">
        <div className='table'>
            <h1 className='title'>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
                ) : (
            <table className="cart-table">
            <thead>
                <tr>
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item) => (
                    <tr key={item.product_id} className="cart-item">
                    <td className='product'>
                    <img
                        src={imageError ? '/path/to/fallback-image.jpg' : item.image}
                        alt={item.name}
                        className="cart-item-image"
                        onError={handleImageError}
                        />
                    {item.name}
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${item.total.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
            </table>
            )}
        </div>
        <div className="cart-footer">
            <h3>Total: ${total.toFixed(2)}</h3> {/* Affichage du total final avec deux décimales */}
            <button onClick={() => navigate('/Checkout')}>PROCEED TO CHECKOUT</button>
        </div>

    </div>
  );
}

export default AllCart;
