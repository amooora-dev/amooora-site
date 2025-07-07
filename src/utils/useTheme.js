import { createContext, useContext } from "react";

const initialState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeContext = createContext(initialState);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeContext, useTheme };
