import React, { useContext } from "react";
import { MainContext } from "./context";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(MainContext);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Önceden belirlenmiş renkler
  const darkThemeColors = {
    backgroundColor: "#333333", // Koyu arka plan rengi
    textColor: "#FFFFFF", // Beyaz metin rengi
  };

  const lightThemeColors = {
    backgroundColor: "#FFFFFF", // Açık arka plan rengi
    textColor: "#333333", // Koyu metin rengi
  };

  const themeColors = theme === "dark" ? darkThemeColors : lightThemeColors;

  return (
    <button
      style={{
        width: "120px",
        height: "40px",
        backgroundColor: themeColors.backgroundColor,
        color: themeColors.textColor,
      }}
      onClick={switchTheme}
    >
      Theme Switcher
    </button>
  );
}
