// components/BentoImage.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoImage = ({ src, alt, style, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`bento-image ${className || ''}`}
      style={{ borderRadius: 'var(--bento-radius)', ...style }}
    />
  );
};

export default BentoImage;
