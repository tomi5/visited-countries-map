import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { darkTheme, lightTheme } from "../theme/theme";
import { DefaultTheme } from 'styled-components'
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  children: React.ReactNode;
};
type ContextTypes = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const defaultStoredValue = {
  theme: lightTheme,
  isDarkTheme: false,
};

export const ThemeContext = createContext<ContextTypes>({
  toggleTheme: () => null,
  isDarkTheme: false,
});

const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [appTheme, setAppTheme] = useState(lightTheme);
  const [storedValue, setLocalStorage] = useLocalStorage(
    "theme",
    defaultStoredValue
  );

  const setTheme = (mode: DefaultTheme, isDark: boolean) => {
    setLocalStorage({ theme: mode, isDarkTheme: isDark });
    setIsDarkTheme(isDark);
    setAppTheme(mode);
  };

  const toggleTheme = () => {
    isDarkTheme ? setTheme(lightTheme, false) : setTheme(darkTheme, true);
  };

  useEffect(() => {
    if (storedValue) {
      setAppTheme(storedValue.theme);
      setIsDarkTheme(storedValue.isDarkTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProviderSC theme={appTheme}>
      <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProviderSC>
  );
};

export default ThemeProvider;
