import React from 'react'

export const CategoriComponent = () => {
  return (
    <div style={{
      color:colors.dark.secondary
    }} className="w-full md:w-3/4 text-lg md:text-xl font-DMSans  h-20 mx-auto p-5 px-5 justify-between items-center flex flex-row bg-slate-700 border-1 mt-5 ">
      <div className="flex flex-row md:pl-7 gap-5">
        <div>
          <h1>Categories</h1>
        </div>
        <div>
          <h1>Filtres</h1>
        </div>
      </div>
      <div>
        <div className=''>
          <h1>Views: 212  {}</h1>
        </div>
      </div>
    </div>
  );

}
const colors = {
  dark: {
    background: "#000000",
    primary: "#A7A7A7",
    secondary: "#D9D9D9",
    thirth: "#C9D9D9",
    success: "rgba(1, 140, 15, 1)",
    successbg: "rgba(215, 255, 224, 1)",
    textdark: "rgba(102, 102, 102, 1)",
    textgray: "rgba(167, 167, 167, 1)",
    gradient: "rgba(210, 22, 253, 1), rgba(21, 221, 10, 1)",
  },
  light: {
    background: "#ffffff",
    text: "#000000",
    gradient: "rgba(110, 22, 253, 1), rgba(231, 225, 210, 1)",
  },
};

