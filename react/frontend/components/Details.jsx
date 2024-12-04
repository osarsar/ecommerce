import React from 'react';
import api from '../api'; // Ajout de l'importation d'api
import "../style/css/Product_Details.css";
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from "../constants";

function Details({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      navigate('/Login'); // Redirigez l'utilisateur vers la page de connexion
      return;
    }

    try {
      const response = await api.post(
        'http://localhost:8000/cart/add/', // URL de votre API
        { product_id: productId }, // Données envoyées
        {
          headers: { Authorization: `Bearer ${token}` }, // Header d'authentification
        }
      );
      console.log('Produit ajouté avec succès au panier', response.data);
      alert('Produit ajouté au panier !'); // Notification de succès
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier :', error);
      alert('Une erreur est survenue lors de l\'ajout au panier.');
    }
  };

  return (
    <div className="Product_Details_all">
      <div className="title">Product Details</div>
      <div className="project">
        <div>
          <img src={product.image} alt={product.name} className="project-image" />
        </div>
        <div className="right">
          <div className="ptitle">
            {product.name}
            <br />
            <span>Price: {product.price}$</span>
          </div>
          <div className="p">{product.description}</div>
          <div
            onClick={() => handleAddToCart(product.id)}
            className="buttom"
            style={{ cursor: 'pointer' }}
          >
            ADD TO CART
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
