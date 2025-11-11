import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const ThemeContext = createContext();

// 2️⃣ Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 3️⃣ This value is shared with all consumers
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4️⃣ Create a custom hook for convenience
export const useTheme = () => useContext(ThemeContext);
