import React from 'react';

const Button = ({ color, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
//test