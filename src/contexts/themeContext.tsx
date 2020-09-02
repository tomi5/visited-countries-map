import React, { createContext, useState, useEffect } from 'react';

import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { darkTheme, lightTheme } from '../theme/theme';
import useLocalStorage from '../hooks/useLocalStorage';

type Props = {
  children: React.ReactNode;
};
type ContextTypes = {
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextTypes>({
  toggleTheme: () => null
});

const darkMode = { ...darkTheme };
const lightMode = { ...lightTheme };

const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [appTheme, setAppTheme] = useState(lightMode);
  const [storedValue, setLocalStorage] = useLocalStorage('appMode', []);

  const setTheme = (
    mode: React.SetStateAction<{ body: string; text: string }>,
    isDark: boolean
  ) => {
    setLocalStorage({ theme: mode, isDarkTheme: isDark });
    setIsDarkTheme(isDark);
    setAppTheme(mode);
  };

  const toggleTheme = () => {
    isDarkTheme ? setTheme(lightMode, false) : setTheme(darkMode, true);
  };

  useEffect(() => {
    if (storedValue) {
      setAppTheme(storedValue.theme);
      setIsDarkTheme(storedValue.isDarkTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = { isDarkTheme, toggleTheme };

  return (
    <ThemeProviderSC theme={appTheme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProviderSC>
  );
};

export default ThemeProvider;
