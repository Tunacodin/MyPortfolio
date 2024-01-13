import React from "react";



// Step 1
const ThemeContext = React.createContext(undefined);

// Step 2
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("dark"); // light or dark

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

// Step 3
function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
