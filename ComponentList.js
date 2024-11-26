import React from 'react';
import ComponentItem from './ComponentItem';
const ComponentList = ({ components, addToCart }) => 
    {
  return (
    <div className="component-list">
      {components.map((component) => (
        <ComponentItem key={component.id} component={component} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ComponentList;
