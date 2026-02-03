import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";

type ThemeContextType = ReturnType<typeof useTheme>;
type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const value = useTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
