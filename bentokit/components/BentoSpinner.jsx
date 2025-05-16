// components/BentoSpinner.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoSpinner = ({ 
  size = 'medium', // 'small', 'medium', 'large'
  color = 'accent', // 'accent', 'secondary', 'tertiary', or custom color
  thickness = 'normal', // 'thin', 'normal', 'thick'
  style,
  className = ''
}) => {
  // Map size values to actual sizes
  const sizeMap = {
    small: '24px',
    medium: '40px',
    large: '60px'
  };
  
  // Map thickness values
  const thicknessMap = {
    thin: '2px',
    normal: '4px',
    thick: '6px'
  };
  
  // Determine the color value
  let colorValue;
  if (['accent', 'secondary', 'tertiary'].includes(color)) {
    colorValue = `var(--bento-${color})`;
  } else {
    colorValue = color; // Use custom color
  }
  
  // Set actual size value
  const actualSize = sizeMap[size] || size;
  const actualThickness = thicknessMap[thickness] || thickness;
  
  const spinnerStyle = {
    width: actualSize,
    height: actualSize,
    borderWidth: actualThickness,
    borderColor: `${colorValue} transparent transparent transparent`,
    ...style
  };
  
  return (
    <div className={`bento-spinner ${className}`}>
      <div className="bento-spinner-ring" style={spinnerStyle}></div>
    </div>
  );
};

export default BentoSpinner;

