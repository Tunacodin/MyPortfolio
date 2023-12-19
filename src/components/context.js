// context.js

import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // varsayılan tema "light" olarak ayarlandı

  return (
    <MainContext.Provider value={{ theme, setTheme }}>
      {children}
    </MainContext.Provider>
  );
};
