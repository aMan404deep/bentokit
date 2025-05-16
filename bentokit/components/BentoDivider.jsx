// components/BentoDivider.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoDivider = ({
  orientation = 'horizontal', // 'horizontal', 'vertical'
  variant = 'solid', // 'solid', 'dashed', 'dotted', 'gradient'
  thickness = '1px',
  color = 'border', // 'border', 'accent', 'secondary', 'tertiary', or custom color
  length = '100%', // for vertical dividers, this is height
  withText = '',
  style,
  className = ''
}) => {
  // Determine color value
  let colorValue;
  if (['border', 'accent', 'secondary', 'tertiary'].includes(color)) {
    colorValue = `var(--bento-${color})`;
  } else {
    colorValue = color; // Use custom color
  }
  
  // Base style
  const dividerStyle = {
    ...(orientation === 'horizontal' 
      ? { width: length, borderTopWidth: thickness } 
      : { height: length, borderLeftWidth: thickness }),
    ...(variant !== 'gradient' ? { borderColor: colorValue } : {}),
    ...style
  };
  
  // Handle gradient variant
  if (variant === 'gradient') {
    const gradientDirection = orientation === 'horizontal' ? 'to right' : 'to bottom';
    dividerStyle.borderImage = `linear-gradient(${gradientDirection}, transparent, ${colorValue}, transparent) 1`;
  }
  
  // Combine classes
  const dividerClasses = [
    'bento-divider',
    `bento-divider-${orientation}`,
    `bento-divider-${variant}`,
    withText ? 'bento-divider-with-text' : '',
    className
  ].filter(Boolean).join(' ');

  return withText ? (
    <div className={dividerClasses} style={dividerStyle}>
      <span className="bento-divider-text">{withText}</span>
    </div>
  ) : (
    <div className={dividerClasses} style={dividerStyle}></div>
  );
};

export default BentoDivider;