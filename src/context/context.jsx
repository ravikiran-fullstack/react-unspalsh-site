import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newTheme);
    // console.log(body);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);

  return context;
};
