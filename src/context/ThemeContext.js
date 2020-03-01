import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const themeData = {
  light: {
    text: '#555',
    ui: '#DDD',
    bg: '#EEE'
  },
  dark: {
    text: '#DDD',
    ui: '#333',
    bg: '#555'
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [themeCurrentToggle, setThemeCurrentToggle] = useState(true);
  
  const toggleTheme = () => {
    setThemeCurrentToggle(!themeCurrentToggle)
  }

  return (
    <ThemeContext.Provider value={{ ...themeData, themeCurrentToggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}