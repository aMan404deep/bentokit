// components/BentoCard.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoCard = ({ title, description, icon, style, className, children }) => {
  return (
    <div className={`bento-card ${className || ''}`} style={style}>
      {icon && <div className="bento-icon">{icon}</div>}
      {title && <h3 className="bento-title">{title}</h3>}
      {description && <p className="bento-description">{description}</p>}
      {children}
    </div>
  );
};

export default BentoCard;
