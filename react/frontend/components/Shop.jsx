import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/css/Projects.css"
import { useNavigate} from 'react-router-dom';




function Shop() {
  const [produits, setProduits] = useState([]);
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/Product_Details/${id}`); // Redirige vers la page spécifique du projet
  };

  useEffect(() => {
    // Récupérer la liste des produits depuis l'API
    axios.get('http://localhost:8000/produits/')
      .then((response) => {
        setProduits(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des produits:", error);
      });
  }, []);

//   const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <div className="Project_all">
      <div className="title">Products</div>
      <div className="project">
      {produits.map((produit) => (
          <div
            key={produit.id}
            className="box"
            onClick={() => handleRedirect(produit.id)}
          >
            <img src={produit.image} alt={produit.name} className="project-image" />
            <div className="text">{produit.name}</div>
            <div className="text">Price: {produit.price}$</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;