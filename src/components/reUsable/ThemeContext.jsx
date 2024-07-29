import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#333',
    color: '#fff',
  },
};


export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  
  useEffect(() => {
    const theme = themes[currentTheme];
    document.body.style.background = theme.background;
    document.body.style.color = theme.color;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
