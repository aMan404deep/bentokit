// components/BentoSwitch.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoSwitch = ({
  checked = false,
  onChange,
  size = 'medium', // small, medium, large
  color = 'accent', // 'accent', 'secondary', 'tertiary', or custom color
  label = '',
  labelPosition = 'right', // 'right', 'left'
  disabled = false,
  className = '',
  style
}) => {
  // Map size values
  const sizeMap = {
    small: { track: '32px', thumb: '14px' },
    medium: { track: '44px', thumb: '20px' },
    large: { track: '56px', thumb: '26px' }
  };
  
  // Determine color value
  let colorValue;
  if (['accent', 'secondary', 'tertiary'].includes(color)) {
    colorValue = `var(--bento-${color})`;
  } else {
    colorValue = color; // Use custom color
  }
  
  // Get size values
  const trackWidth = sizeMap[size]?.track || '44px';
  const thumbSize = sizeMap[size]?.thumb || '20px';
  
  // Calculate styles
  const switchStyle = {
    '--switch-width': trackWidth,
    '--thumb-size': thumbSize,
    '--switch-color': colorValue,
    ...style
  };
  
  // Combine classes
  const switchClasses = [
    'bento-switch',
    `bento-switch-${size}`,
    disabled ? 'bento-switch-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Handle label position
  const containerClasses = `bento-switch-container ${
    labelPosition === 'left' ? 'bento-switch-label-left' : ''
  }`;

  return (
    <div className={containerClasses}>
      {label && <label className="bento-switch-label">{label}</label>}
      <div className={switchClasses} style={switchStyle}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="bento-switch-input"
        />
        <span className="bento-switch-track">
          <span className="bento-switch-thumb"></span>
        </span>
      </div>
    </div>
  );
};

export default BentoSwitch;