import { createContext, useState, useEffect, useContext } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const values = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
