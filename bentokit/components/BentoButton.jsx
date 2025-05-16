// components/BentoButton.jsx
import React from 'react';
import './bentokit.css';

const BentoButton = ({ label, onClick, type = 'button', style, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bento-button ${className || ''}`}
      style={style}
    >
      {label}
    </button>
  );
};

export default BentoButton;
