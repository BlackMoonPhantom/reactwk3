import React from 'react';

const Text = ({ size, color, children }) => {
  // Determine font size based on size prop
  let fontSize;
  switch (size) {
    case 'small':
      fontSize = '1rem';
      break;
    case 'medium':
      fontSize = '2rem';
      break;
    case 'large':
      fontSize = '3rem';
      break;
    default:
      fontSize = '3rem';
      break;
  }

  return (
    <p style={{ fontSize, color }}>
      {children}
    </p>
  );
};

export default Text;
