import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the context
const ThemeContext = createContext();

// 2. Create the Provider (a wrapper component)
export function ThemeProvider({ children }) {
  // 3. Set up state
  // We check localStorage first for a saved theme, default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 4. Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // 5. (Bonus) Effect to save theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]); // This runs every time 'theme' changes

  // 6. Provide the theme and toggle function to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 7. (Bonus) A custom hook to make it easy to use the context
export const useTheme = () => {
  return useContext(ThemeContext);
};