import React, { useEffect } from 'react';
import { useTheme } from './reUsable/ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme, currentTheme } = useTheme();





  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <p>The current theme is {currentTheme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
