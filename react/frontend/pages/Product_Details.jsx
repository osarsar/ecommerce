import Navbar from "../components/Navbar"
import Front from "../components/Front"
import Solution from "../components/Solution"
import Box2 from "../components/Box2"
import Connection from "../components/Connection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Element } from 'react-scroll';
import Details from "../components/Details"
import up from "../style/image/up1.jpeg"
import "../style/css/Apropos.css"
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';




export default function Product_Details()
{
    const [produit, setProduit] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        // Récupérer les détails du produit depuis l'API
        axios.get(`http://localhost:8000/produits/${id}/`)  // Assurez-vous que l'API prend l'ID en paramètre
          .then((response) => {
            setProduit(response.data);
          })
          .catch((error) => {
            console.error("Erreur lors du chargement des détails du produit:", error);
          });
      }, [id]);

    if (!produit) {
      return <div>Loading...</div>;  // Affiche "Loading..." en attendant les données
    }

    return (
        <div>
        <Navbar />
        <div className="product_up">
            <img src={up} alt="flag"></img>
        </div>
        {/* <div className="product-details">
      <h1>{produit.name}</h1>
      <img src={produit.image} alt={produit.name} className="product-image" />
      <p>{produit.description}</p>
      <p>Price: {produit.price}$</p>
      <p>Stock: {produit.stock}</p>
      <p>Category: {produit.categorie}</p>
    </div> */}
        <Details product={produit}/>
        </div>);
};