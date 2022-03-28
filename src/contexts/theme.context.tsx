import React, { useState, createContext, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import themes from "../theme/theme";
type Theme = "dark" | "light";

interface ThemContextInterface {
  theme: Theme;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemContextInterface>(
  {} as ThemContextInterface
);
ThemeContext.displayName = "CustomThemeProvider";

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  const themeObj = themes[theme];

  const toggleTheme = (): void => {
    let nextTheme: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeObj}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
