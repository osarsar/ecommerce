import React, { useState } from 'react';
import "../style/css/Product_Details.css"
import { useNavigate} from 'react-router-dom';


function Details({product}) {

  return (
    <div className="Product_Details_all">
      <div className="title">Product Details</div>
      <div className="project">
        <div>
              <img src={product.image} alt={product.name} className="project-image" />

        </div>
        <div className='right'>
            <div className='ptitle'>
            {product.name}<br/>
            <span>Price: {product.price}$</span>
            </div>
            <div className='p'>
            {product.description}
            </div>
            <div className='buttom'>
                ADD TO CART
            </div>
        </div>
      </div>
    </div>
  );
}

export default Details;