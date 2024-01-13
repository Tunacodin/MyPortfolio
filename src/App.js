import React, { useEffect, useState } from "react";
import MainPage from "./MainPage";
import Hobbies from "./Hobbies";
import More from "./MoreAbout";
import { MainContext } from "./components/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeProvider } from "./Hooks/useTheme";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#ffffff" : "#000000";
  });
  const [theme, settheme] = useState("light");

  const data = {
    theme,
    settheme,
  };


  return (
    <MainContext.Provider value={data}>
      <ThemeProvider value={data}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>

            <Route path="/more" element={<More />}></Route>

            <Route path="/hobbies" element={<Hobbies />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </MainContext.Provider>
  );
};

export default App;
