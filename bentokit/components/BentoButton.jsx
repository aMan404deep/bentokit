// components/BentoButton.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoButton = ({ 
  label, 
  onClick, 
  type = 'button', 
  style, 
  className = '',
  variant = 'primary', // 'primary', 'secondary', 'tertiary', 'outline'
  ripple = false,
  animation = '', // 'float', 'pulse', etc.
  children
}) => {
  // Determine variant class
  const variantClass = variant !== 'primary' ? `bento-button-${variant}` : '';
  
  // Combine all classes
  const buttonClasses = [
    'bento-button',
    variantClass,
    ripple ? 'bento-button-ripple' : '',
    animation ? `bento-animate-${animation}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      style={style}
    >
      {label || children}
    </button>
  );
};

export default BentoButton;