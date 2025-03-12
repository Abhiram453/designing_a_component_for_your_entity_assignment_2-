import React from 'react';
import ViewProductButton from './button';
import './productcard.css'; 

const Productcard = () => {
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const price = '$19.99';

  return (
    <div className="productcard">
      <img src={productImage} alt="Product" className="productcard-image" />
      <h2 className="productcard-name">{productName}</h2>
      <p className="productcard-price">{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;