import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const storedTheme =
    localStorage.getItem('darkTheme') === 'true' ? true : false;
  console.log(typeof storedTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme);
  const [searchInput, setSearchInput] = useState('cat');

  const toggleTheme = () => {
    console.log('toggleTheme', isDarkTheme);
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    console.log('toggleTheme newTheme', newTheme);

    // console.log(body);
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
