import React from 'react';
const ComponentItem = ({ component, addToCart }) => 
    {
  return (
    <div className="component-item">
      <img src={component.image} alt={component.name} className="component-image" />
      <h2>{component.name}</h2>
      <p>{component.description}</p>
      <button onClick={() => addToCart(component)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ComponentItem;
