// components/BentoCard.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoCard = ({ 
  title, 
  description, 
  icon, 
  style, 
  className = '',
  animation = '', // 'float', 'pulse', 'breathe', etc.
  reflection = false,
  depth = false,
  glass = false,
  glow = false,
  borderHighlight = false,
  children 
}) => {
  // Combine all the effect classes
  const effectClasses = [
    animation ? `bento-animate-${animation}` : '',
    reflection ? 'bento-reflection' : '',
    depth ? 'bento-depth' : '',
    glass ? 'bento-glass' : '',
    glow ? 'bento-glow' : '',
    borderHighlight ? 'bento-border-highlight' : '',
    className // Include any additional classes passed by the user
  ].filter(Boolean).join(' ');

  return (
    <div className={`bento-card ${effectClasses}`} style={style}>
      {icon && <div className="bento-icon">{icon}</div>}
      {title && <h3 className="bento-title">{title}</h3>}
      {description && <p className="bento-description">{description}</p>}
      {children}
    </div>
  );
};

export default BentoCard;