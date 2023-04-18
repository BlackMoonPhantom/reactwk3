import React from 'react';

const Box = ({ size, children }) => {
  // Default background color for Box component
  const backgroundColor = '#f0f0f0';

  // Determine CSS class based on size prop
  let boxSizeClass;
  switch (size) {
    case 's':
    case 'small':
    case 'sm':
      boxSizeClass = 'box-small';
      break;
    case 'm':
    case 'medium':
      boxSizeClass = 'box-medium';
      break;
    case 'l':
    case 'large':
      boxSizeClass = 'box-large';
      break;
    default:
      boxSizeClass = 'box-large';
      break;
  }

  return (
    <div className={`box ${boxSizeClass}`} style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default Box;
