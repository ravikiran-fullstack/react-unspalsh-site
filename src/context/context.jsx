import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const storedTheme =
    localStorage.getItem('darkTheme') === 'true' ? true : false;
  const storedSearchItem = localStorage.getItem('searchItem');
  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme);
  const [searchInput, setSearchInput] = useState(storedSearchItem || 'animals');

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('darkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchInput, setSearchInput }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);

  return context;
};
