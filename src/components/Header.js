import React from "react";
import x from "../images/x.png";
import github from "../images/github-icon-2.svg";
import linkedin from "../images/linkedin-icon.svg";
import MoreAbout from "../Text";
import { LinearGradient } from "react-text-gradients";
import ThemedButton from "./themeSwitcher";

export const Header = () => {



  return (
    <div className=" h-40 flex bg-black flex-row-reverse py-5 pl-25 px-20 ">
      <div className="flex h-full flex-row pr-10  items-center">
        <ul className="flex flex-row gap-4 pt-6 mr-10 justify-center items-center">
          <li>
            <a href="https://github.com/Tunacodin">
              <img
                src={github}
                alt="github"
                style={{
                  width: "30px",
                  height: "30px",
                }}
              ></img>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tuna-bostancıbaşı-1a1740230">
              <img
                src={linkedin}
                alt="linkedin"
                style={{
                  width: "30px",
                  height: "30px",
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
                  width: "28px",
                  height: "28px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
              ></img>
            </a>
          </li>
        </ul>
      </div>

      <div className="w-2/3 px-20 flex flex-row items-center">
        <ul
          style={{ color: colors.dark.primary }}
          className="flex flex-row pl-44 gap-20  pt-5 text-2xl font-DMSans"
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

      <div className="w-1/4 items-center justify-center p-2 pt-8 ">
        <div style={{ lineHeight: "26px" }}>
          <h1
            style={{
              color: "rgba(110, 122, 253, 1), rgba(21, 221, 10, 1)",
              fontSize: "38px",
            }}
            className="text-zinc-300 self-center inline-block "
          >
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              Tuna
            </LinearGradient>
          </h1>
          <h2
            style={{
              color: "rgba(110, 22, 253, 1), rgba(231, 225, 100, 1)",
              fontSize: "37px",
            }}
            className="text-zinc-400"
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
