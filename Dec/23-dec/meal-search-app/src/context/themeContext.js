import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggle_theme: () => { },
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, set_theme] = useState("light");
  const toggle_theme = () => {
    set_theme(prev => {
      switch (prev) {
        case "light":
          return "dark";
        default:
          return "light";
      }
    });
  };
  return <ThemeContext.Provider value={{
    theme,
    toggle_theme
  }}  >
    {children}
  </ThemeContext.Provider>;
};