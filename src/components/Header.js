import React from "react";
import x from "../images/x.png";
import github from "../images/github-icon-2.svg";
import linkedin from "../images/linkedin-icon.svg";
import MoreAbout from "../Text";
import { LinearGradient } from "react-text-gradients";
import ThemedButton from "./themeSwitcher";

export const Header = () => {



  return (
    <div className=" md:h-40 flex bg-black items-center justify-center mx-auto  pt-8 flex-row-reverse md:py-5  md:px-20 ">
      <div className="flex h-full flex-row md:pr-10  items-center">
        <ul className="md:flex md:flex-row gap-2 p-1 md:gap-4 md:pt-6 md:visible hidden md:mr-10 justify-center items-center">
          <li>
            <a href="https://github.com/Tunacodin">
              <img
                src={github}
                alt="github"
                
                className="w-[36px] h-[36px]"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tuna-bostancıbaşı-1a1740230">
              <img
                src={linkedin}
                alt="linkedin"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              ></img>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Tunacodin">
              <img
                src={x}
                alt="x"
                style={{
                  width: "32px",
                  height: "28px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
              ></img>
            </a>
          </li>
        </ul>
      </div>

      <div className="w-2/3 md:px-20 flex flex-row items-center mx-auto justify-center">
        <ul
          style={{ color: colors.dark.primary }}
          className="flex flex-row gap-5 md:pl-44 md:gap-20 text-2xl  md:pt-5 md:text-2xl font-DMSans"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/more">Blog</a>
          </li>
          <li>
            <a href="/hobbies">Hobbies</a>
          </li>
        </ul>
      </div>

      <div className="w-0  md:w-1/4 items-center md:overflow-visible overflow-hidden  justify-center md:p-2 md:pt-8 ">
        <div style={{ lineHeight: "26px" }}>
          <h1
            style={{
              color: "rgba(110, 122, 253, 1), rgba(21, 221, 10, 1)",
            }}
            className="text-zinc-300 text-md md:text-4xl self-center inline-block "
          >
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              Tuna
            </LinearGradient>
          </h1>
          <h2
            style={{
              color: "rgba(110, 22, 253, 1), rgba(231, 225, 100, 1)",
            }}
            className="text-zinc-400 text-xl md:text-4xl "
          >
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              Bostancıbaşı
            </LinearGradient>
          </h2>
        </div>
      </div>
    </div>
  );
};

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
