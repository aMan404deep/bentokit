// components/BentoSwitch.jsx
import React from 'react';
import '../styles/bentokit.css';

const BentoSwitch = ({
  checked = false,
  onChange,
  disabled = false,
  label = '',
  labelPosition = 'right',
  size = 'medium', // 'small', 'medium', 'large'
  color = 'accent', // 'accent', 'secondary', 'tertiary', or custom color
  style,
  className = ''
}) => {
  // Determine color value
  let colorValue;
  if (['accent', 'secondary', 'tertiary'].includes(color)) {
    colorValue = `var(--bento-${color})`;
  } else {
    colorValue = color; // Use custom color
  }
  
  // Set size values based on size prop
  let thumbSize, switchWidth;
  switch(size) {
    case 'small':
      thumbSize = '14px';
      switchWidth = '36px';
      break;
    case 'large':
      thumbSize = '24px';
      switchWidth = '56px';
      break;
    case 'medium':
    default:
      thumbSize = '18px';
      switchWidth = '46px';
      break;
  }
  
  // Combine classes
  const containerClasses = [
    'bento-switch-container',
    labelPosition === 'left' ? 'bento-switch-label-left' : '',
    className
  ].filter(Boolean).join(' ');
  
  const switchClasses = [
    'bento-switch',
    `bento-switch-${size}`,
    disabled ? 'bento-switch-disabled' : ''
  ].filter(Boolean).join(' ');
  
  // Set custom styles with CSS variables
  const switchStyle = {
    '--switch-color': colorValue,
    '--switch-width': switchWidth,
    '--thumb-size': thumbSize,
    ...style
  };

  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  return (
    <div className={containerClasses} style={switchStyle}>
      {label && (
        <span className="bento-switch-label">{label}</span>
      )}
      <label className={switchClasses}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="bento-switch-input"
        />
        <span className="bento-switch-track">
          <span className="bento-switch-thumb"></span>
        </span>
      </label>
    </div>
  );
};

export default BentoSwitch;