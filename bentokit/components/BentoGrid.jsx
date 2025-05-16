// components/BentoGrid.jsx
import React from 'react';
import './bentokit.css';

const BentoGrid = ({ columns = 3, gap = '1rem', style, className, children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)` ,
    gap,
    ...style,
  };

  return (
    <div className={`bento-grid ${className || ''}`} style={gridStyle}>
      {children}
    </div>
  );
};

export default BentoGrid;
