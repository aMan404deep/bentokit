// components/BentoProgressBar.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoProgressBar = ({ 
  value = 0, // 0-100
  max = 100,
  color = 'accent', // 'accent', 'secondary', 'tertiary', or custom color
  variant = 'default', // 'default', 'gradient', 'striped', 'glow'
  size = 'medium', // 'small', 'medium', 'large'
  animated = false,
  showValue = false,
  style,
  className = ''
}) => {
  // Calculate percentage
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  // Map size values to heights
  const sizeMap = {
    small: '6px',
    medium: '10px',
    large: '16px'
  };
  
  // Determine the color value
  let colorValue;
  if (['accent', 'secondary', 'tertiary'].includes(color)) {
    colorValue = `var(--bento-${color})`;
  } else {
    colorValue = color; // Use custom color
  }
  
  // Set actual size value (height)
  const actualSize = sizeMap[size] || size;
  
  // Build variant classes
  const variantClass = variant !== 'default' ? `bento-progress-${variant}` : '';
  const animatedClass = animated ? 'bento-progress-animated' : '';
  
  // Combine all classes
  const progressClasses = [
    'bento-progress',
    variantClass,
    animatedClass,
    className
  ].filter(Boolean).join(' ');
  
  // Progress bar container style
  const containerStyle = {
    height: actualSize,
    ...style
  };
  
  // Progress bar fill style
  const fillStyle = {
    width: `${percentage}%`,
    backgroundColor: variant === 'gradient' ? null : colorValue
  };
  
  // For gradient variant, we set a custom background
  if (variant === 'gradient') {
    fillStyle.backgroundImage = `linear-gradient(90deg, ${colorValue} 0%, var(--bento-secondary) 100%)`;
  }

  return (
    <div className="bento-progress-container">
      <div className={progressClasses} style={containerStyle}>
        <div className="bento-progress-fill" style={fillStyle}></div>
      </div>
      {showValue && (
        <div className="bento-progress-value">{value}/{max}</div>
      )}
    </div>
  );
};

export default BentoProgressBar;