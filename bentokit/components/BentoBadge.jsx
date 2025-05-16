// components/BentoBadge.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoBadge = ({
  content,
  variant = 'filled', // 'filled', 'outline', 'subtle'
  color = 'accent', // 'accent', 'secondary', 'tertiary', or custom color
  size = 'medium', // 'small', 'medium', 'large'
  rounded = true,
  glow = false,
  pulse = false,
  style,
  className = '',
  children
}) => {
  // Determine color value
  let colorValue;
  if (['accent', 'secondary', 'tertiary'].includes(color)) {
    colorValue = `var(--bento-${color})`;
  } else {
    colorValue = color; // Use custom color
  }
  
  // Combine classes
  const badgeClasses = [
    'bento-badge',
    `bento-badge-${variant}`,
    `bento-badge-${size}`,
    rounded ? 'bento-badge-rounded' : '',
    glow ? 'bento-badge-glow' : '',
    pulse ? 'bento-badge-pulse' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Set style with color
  const badgeStyle = {
    '--badge-color': colorValue,
    ...style
  };

  return (
    <div className="bento-badge-container">
      {children}
      <span className={badgeClasses} style={badgeStyle}>
        {content}
      </span>
    </div>
  );
};

export default BentoBadge;