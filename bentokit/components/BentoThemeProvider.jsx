// components/BentoThemeProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import '../styles/bentokit.css';

const ThemeContext = createContext({
  theme: 'default',
  setTheme: () => {},
  customizeTheme: () => {}
});

export const useBentoTheme = () => useContext(ThemeContext);

const BentoThemeProvider = ({ 
  theme = 'default', // default, dark, light, cyber, pastel, or custom
  customValues = {}, 
  children 
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  
  // Apply theme class to the container
  const themeClass = currentTheme !== 'default' && currentTheme !== 'custom' 
    ? `bento-theme-${currentTheme}` 
    : '';
  
  // Apply custom CSS variables
  useEffect(() => {
    // Function to apply CSS variables to document root
    const applyCustomValues = (values) => {
      Object.entries(values).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--bento-${key}`, value);
      });
    };

    // Apply custom values if any
    if (Object.keys(customValues).length > 0) {
      applyCustomValues(customValues);
    }

    // Cleanup function to reset custom values
    return () => {
      Object.keys(customValues).forEach((key) => {
        document.documentElement.style.removeProperty(`--bento-${key}`);
      });
    };
  }, [customValues]);

  // Function to set theme
  const setTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  // Function to dynamically customize theme values
  const customizeTheme = (newValues) => {
    Object.entries(newValues).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--bento-${key}`, value);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme, customizeTheme }}>
      <div className={themeClass}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default BentoThemeProvider;