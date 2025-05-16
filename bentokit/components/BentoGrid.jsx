// components/BentoGrid.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoGrid = ({ 
  columns = 3, 
  gap = '1rem', 
  style, 
  className = '',
  dense = false,
  masonry = false,
  responsive = true,
  autoColumns = false, // Uses auto-fit for responsive columns
  minColumnWidth = '250px', // Minimum column width for autoColumns
  areas = null, // CSS grid areas template string
  rows = null, // Number of rows or template
  children 
}) => {
  // Calculate grid template columns
  let gridTemplateColumns;
  
  if (autoColumns) {
    gridTemplateColumns = `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
  } else if (typeof columns === 'number') {
    gridTemplateColumns = `repeat(${columns}, 1fr)`;
  } else {
    // Allow passing complex grid templates like "1fr 2fr 1fr"
    gridTemplateColumns = columns;
  }

  // Combine grid styles
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns,
    gap,
    gridTemplateAreas: areas,
    gridTemplateRows: rows,
    ...style,
  };

  // Combine grid classes
  const gridClasses = [
    'bento-grid',
    dense ? 'bento-grid-dense' : '',
    masonry ? 'bento-grid-masonry' : '',
    responsive ? 'bento-grid-responsive' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses} style={gridStyle}>
      {children}
    </div>
  );
};

export default BentoGrid;