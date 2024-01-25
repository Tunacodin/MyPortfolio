import React, { useRef, useEffect } from "react";
import App from "./App.css";
import EnglishCard from "./components/EnglishCard";
import FranchCard from "./components/FrenchCard";
import { Header } from "./components/Header";
import Piano from "./components/Piano";
import Fitness from "./components/Fitness";
import Cinema from "./components/Cinema";

export default function Hobbies() {
  return (
    <div className="w-full h-full bg-black">
      <div className="relative w-full md:w-4/5 mx-auto h-full py-10 ">
        <div className="relative w-4/5 mx-auto h-full  ">
          <h1
            style={{ color: colors.dark.primary }}
            className=" textContainer font-DMSans font-semibold text-6xl pt-20"
          >
            HOBBIES
          </h1>

          <div
            style={{ width: "2px" }}
            className="overlayV hidden md:visible  rounded-sm bg-white absolute opacity-40 top-44 h-5/6 bottom-0"
          ></div>

          <div className="flex flex-col w-full h-full ">
            <EnglishCard />
            <FranchCard />
            <Piano />
            <Fitness />
            <Cinema />
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
