// import React, { useContext } from "react";
// import { MainContext } from "./context";

import { useTheme } from "../Hooks/useTheme";


// export default function ThemeSwitcher() {
//   const { theme, setTheme } = useContext(MainContext);

//   const switchTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   // Önceden belirlenmiş renkler
//   const darkThemeColors = {
//     backgroundColor: "#333333", // Koyu arka plan rengi
//     textColor: "#FFFFFF", // Beyaz metin rengi
//   };

//   const lightThemeColors = {
//     backgroundColor: "#FFFFFF", // Açık arka plan rengi
//     textColor: "#333333", // Koyu metin rengi
//   };
// console.log("theme",theme)
//   const themeColors = theme === "dark" ? darkThemeColors : lightThemeColors;

//   return (
//     <button
//       style={{
//         width: "120px",
//         height: "40px",
//         backgroundColor: themeColors.backgroundColor,
//         color: themeColors.textColor,
//       }}
//       onClick={switchTheme}
//     >
//       Theme Switcher
//     </button>
//   );
// }



export default function ThemedButton()
{
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    // Burada tema değişimini gerçekleştirebilirsiniz (örneğin, light ise dark, dark ise light olarak).
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return <button style={{backgroundColor:"red"}} onClick={toggleTheme}>Change Theme</button>;
}