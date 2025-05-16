// components/BentoImage.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoImage = ({ 
  src, 
  alt, 
  style, 
  className = '',
  effect = '', // 'zoom', 'rotate'
  shadow = false,
  reflection = false,
  aspectRatio = null, // '16/9', '1/1', '4/3', etc.
  lazy = true,
  onClick
}) => {
  // Combine effect classes
  const effectClasses = [
    'bento-image',
    effect ? `bento-image-${effect}` : '',
    shadow ? 'bento-image-shadow' : '',
    reflection ? 'bento-reflection' : '',
    className
  ].filter(Boolean).join(' ');

  // Combine styles
  const combinedStyle = {
    aspectRatio: aspectRatio || 'auto',
    ...style
  };

  return (
    <img
      src={src}
      alt={alt}
      className={effectClasses}
      style={combinedStyle}
      loading={lazy ? 'lazy' : 'eager'}
      onClick={onClick}
    />
  );
};

export default BentoImage;