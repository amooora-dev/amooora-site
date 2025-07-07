import { useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";

function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "amooora.theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);
    root.classList.remove("bg-white", "bg-zinc-900");
    root.classList.add(theme === "light" ? "bg-white" : "bg-zinc-900");
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme = "light") => {
      if (theme !== "light" && theme !== "dark") {
        console.warn(`Invalid theme: ${theme}. Defaulting to 'light'.`);
        theme = "light";
      }
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
