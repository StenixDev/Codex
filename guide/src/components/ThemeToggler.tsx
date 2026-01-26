import { createContext, useState } from 'react';

import type { ReactNode } from 'react';

// 1. Define the shape of the context
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isDark: boolean;
};

// 2. Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider props type
type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((cv) => (cv === 'light' ? 'dark' : 'light'));
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function ThemeToggler() {
  return <div>ThemeToggler</div>;
}
export default ThemeToggler;
