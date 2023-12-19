import React from 'react'
import blog from '../images/blog.jpg'
import { Header } from './Header'
import { CategoriComponent } from './CategoriComponent';
import {BlogCard} from './Card';

export const More = () => {
  return (
    <div className="w-full bg-black h-full justify-center items-center">
      <Header />
      <div className="w-full  h-full flex flex-col justify-center">
        <div style={{}} className="w-full h-1/2 shadow-2xl shadow-slate-700">
          <img
            src={blog}
            style={{
              width: "200%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center ",
              opacity: "0.9",
            }}
          ></img>
        </div>
        <CategoriComponent />
        <h1
          style={{ color: colors.dark.primary }}
          className=" textContainer text-left font-DMSans font-semibold text-6xl pt-10 px-80"
        >
          BLOG
        </h1>

        <div className=" w-full h-screen flex bg-black flex-col justify-center items-center ">
          <div className="w-4/5 p-5 h-full bg-slate-800 px-10 justify-center gap-5 items-center shadow-2xl shadow-slate-00 flex flex-row rounded-2xl">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
       
          </div>
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
