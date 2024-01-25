import React from 'react'
import { LinearGradient } from "react-text-gradients";
import github from "../images/github-icon-2.svg";
import twitter from "../images/twitter-6.svg";
import linkedin from "../images/linkedin-icon.svg";
import MoreAbout from "../MoreAbout";

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

const Footer = () => {
  return (
    <div className="w-full mx-auto ">
      <div
        id="contacts"
        className="w-full bg-black justify-between gap-4 flex flex-col md:flex-row items-center px-40 p-10 mx-auto"
      >
        <div className="text-center text-4xl ">
          <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
            Tuna Bostancıbaşı
          </LinearGradient>
        </div>
        <div
          style={{ color: colors.dark.primary }}
          className="flex flex-col md:flex-row gap-5  justify-center items-center text-xl "
        >
          <ul className="flex flex-col text-center md:flex-row gap-5">
            <li>
              <a href="#number">+90 538 722 72 58</a>
            </li>
            <li>
              <a href="#email"> tunabstcnx@gmail.com</a>
            </li>
          </ul>
          <ul className="flex flex-row gap-5 md:ml-10">
            <li href="#github">
              <img
                src={github}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              ></img>
            </li>
            <li href="#twitter">
              <img
                src={twitter}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              ></img>
            </li>
            <li href="#linkedin">
              <img
                src={linkedin}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              ></img>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      
      >
        <div
          style={{
            backgroundColor: colors.dark.primary,
            width: "83%",
            alignItems: "center",
            height: "1px",
          }}
          className="mx-auto"
        ></div>
      </div>

      <div
        style={{ color: colors.dark.primary }}
        className="w-full justify-between md:flex-row    items-center bg-black md:p-12 px-4 md:px-40 "
      >
        <div>
          <ul className="font-DMSans hidden md:visible  flex flex-row gap-8 text-2xl">
            <li>
              <a href="#home"> Home</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#projects"> Projects</a>
            </li>
            <li>
              <a href="#techstack"> TechStack</a>
            </li>
            <li>
              <a> Hobbies</a>
            </li>
            <li>
              <a href="#contacts"> Contacts</a>
            </li>
          </ul>
        </div>

        <div
          style={{
            color: colors.dark.primary,
            fontSize: "20px",
          }}
          className="py-4 flex hidden md:visible flex-row"
        >
          <h1>
            Designed and built by {""}
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              Tuna Bostancıbaşı
            </LinearGradient>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer
