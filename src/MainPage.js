import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "./images/Tuna.png";
import html from "./images/html-1.svg";
import bootstrap from "./images/bootstrap.svg";
import reactNative from "./images/react-native.svg";
import tailwind from "./images/tailwind-css-2.svg";
import github from "./images/github-icon-2.svg";
import css from "./images/css3.svg";
import js from "./images/js.svg";
import react from "./images/react.svg";
import git from "./images/git-alt.svg";
import twitter from "./images/twitter-6.svg";
import linkedin from "./images/linkedin-icon.svg";
import bg3 from "./images/bg4.jpg";
import bg4 from "./images/bg5.jpg";
import bg5 from "./images/bg6.jpg";
import bg6 from "./images/bg7.jpg";
import bg7 from "./images/bg8.jpg";
import { LinearGradient } from "react-text-gradients";
import "./App.css";
import MoreAbout from "./Text";
export default function MainPage() {
  return (
    <div
      style={{
        backgroundColor: "black",
        text: colors.dark.primary,
        fontFamily: "Poppins",
      }}
      className="w-full h-screen md:pt-28  justify-center items-center "
    >
      <div className="container grid grid-cols-1  w-full h-2/4  md:mx-auto md:flex md:flex-row-reverse  justify-evenly">
        <div className="  items-center justify-center  rounded-full">
          <img
            src={profile}
            style={{
              width: "340px",
              height: "340px",
            }}
            className="overlaySmall  md:overlay  mx-auto rounded-full mt-10 shadow-2xl  "
          ></img>
        </div>
        <div
          style={{ color: colors.dark.secondary, fontFamily: "Poppins" }}
          className="md:p-10text-2xl xl:text-6xl leading-10 md:mt-16 w-full md:w-3/5"
        >
          <h1 className="text-2xl xl:text-6xl md:leading-10 text-center md:text-start  font-semibold mt-10">
            Hi!👋 My name is <br />{" "}
            <span className="text-2xl md:text-6xl ">
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                Tuna Bostancıbaşı
              </LinearGradient>
            </span>
            <br /> I build things <br /> for web and mobile
          </h1>
        </div>
      </div>

      <div
        id="about"
        className="w-full text-center md:text-start  flex flex-col md:gap-10 justify-center item-center md:items-start mt-56 md:mt-56 md:pl-52  bg-black"
      >
        <div className="md:w-3/5 h-full bg-black leading-10 justify-center px-5">
          <h1
            style={{ color: colors.dark.secondary }}
            className="font-Poppins text-3xl md:text-5xl font-semibold "
          >
            ABOUT ME
          </h1>
          <br />
          <p
            style={{
              color: colors.dark.thirth,
            }}
            className="w-full font-Poppins we text-xl md:text-2xl my-5"
          >
            First of all Hello my webpage. Nice to see you here.. <br />I am
            Tuna Bostancıbaşı and I am currently university student as a
            computer engineering student in Denizli, Turkey. I am 23 years old.
            I am develop web and mobile.
          </p>
        </div>

        <div
          style={{
            color: colors.dark.secondary,
          }}
          className="w-full md:w-3/5 h-full  bg-black justify-center px-5"
        >
          <h1
            style={{ color: colors.dark.secondary }}
            className=" font-Poppins text-3xl md:text-5xl font-semibold py-10 "
          >
            WORK EXPERIENCE
          </h1>

          <div className="w-full h-full gap-2 text-start">
            <div className="w-full h-full justify-between flex flex-row items-center font-Poppins">
              <div className="gap-2 flex flex-col ">
                <h2 className="text-md md:text-xl">React-Native Course</h2>
                <h3 className="text-md md:text-lg text-slate-300">
                  -Denizli / Turkey
                </h3>
              </div>

              <div className="gap-2 flex my-5 flex-col ">
                <h2
                  style={{
                    color: colors.dark.success,
                    backgroundColor: colors.dark.successbg,
                    textAlign: "center",
                  }}
                  className="rounded-3xl p-2 text-md md:text-lg"
                >
                  Internship
                </h2>
                <h3 className="text-md text-slate-300">2022-Present</h3>
              </div>
            </div>

            <div
              style={{ height: "1px" }}
              className=" overlaySoft opacity-30 w-full my-5 bg-white mx-auto"
            ></div>

            <div className="w-full h-full justify-between flex flex-row items-center font-Poppins">
              <div className="gap-2 flex flex-col ">
                <h2 className="text-lg md:text-xl">ReactJS</h2>
                <h3 className="text-md md:text-lg text-slate-300">
                  -Denizli / Turkey
                </h3>
              </div>

              <div className="gap-2 flex flex-col ">
                <h2
                  style={{
                    color: colors.dark.success,
                    backgroundColor: colors.dark.successbg,
                    textAlign: "center",
                  }}
                  className="rounded-3xl  p-2"
                >
                  Developer
                </h2>
                <h3 className="text-md  text-slate-300">2022-Present</h3>
              </div>
            </div>
            <div
              style={{ height: "1px" }}
              className=" overlaySoft opacity-30 w-full my-5 bg-white mx-auto"
            ></div>

            <div className="w-full h-full justify-between flex flex-row items-center font-Poppins">
              <div className="gap-2 flex flex-col  ">
                <h2 className="text-md md:text-xl">HTML/CSS/JAVASCRIPT</h2>
                <h3 className="text-md md:text-lg text-slate-300">
                  -Pamukkale University / Denizli
                </h3>
              </div>

              <div className="gap-2 flex flex-col ">
                <h2
                  style={{
                    color: colors.dark.success,
                    backgroundColor: colors.dark.successbg,
                    textAlign: "center",
                  }}
                  className="rounded-3xl p-2"
                >
                  Tutor
                </h2>
                <h3 className="text-md text-slate-300">2021-2022</h3>
              </div>
            </div>
            <div
              style={{ height: "1px" }}
              className="overlaySoft opacity-30  w-full my-5 bg-white mx-auto"
            ></div>
          </div>
        </div>

        <div className="w-full md:w-3/5 h-full bg-black justify-center px-5">
          <div className="w-full">
            <h1
              style={{ color: colors.dark.secondary }}
              className="font-Poppins text-3xl  md:text-5xl font-semibold "
            >
              EDUCATION
            </h1>
          </div>
          <br />
          <div className="w-full h-full justify-between flex flex-row items-center ">
            <div
              style={{ color: colors.dark.secondary }}
              className="gap-2 flex flex-col text-start "
            >
              <h2 className="text-md md:text-lg">
                Yenişehir Anatolian HighSchool
              </h2>
              <h3 className="text-md md:text-lg text-slate-300">
                -Sivas/Turkey
              </h3>
            </div>

            <div className="gap-2 flex my-5 flex-col text-start justify-between ">
              <h2
                style={{
                  color: colors.dark.success,
                  backgroundColor: colors.dark.successbg,
                  textAlign: "center",
                }}
                className="rounded-3xl p-2"
              >
                Fulltime
              </h2>
              <h3 className="text-md text-slate-300">2015-2019</h3>
            </div>
          </div>
          <div
            style={{ height: "1px" }}
            className="overlaySoft opacity-30  w-full  bg-white mx-auto"
          ></div>
          <div className="w-full h-full justify-between text-start flex flex-row items-center font-Poppins">
            <div
              style={{ color: colors.dark.secondary }}
              className="gap-2 flex flex-col  "
            >
              <h2 className="text-md md:text-xl">Pamukkale University</h2>
              <h3 className="text-md  md:text-lg text-slate-300">
                - Denizli / Turkey
              </h3>
            </div>

            <div className="gap-2 flex my-5 flex-col ">
              <h2
                style={{
                  color: colors.dark.success,
                  backgroundColor: colors.dark.successbg,
                  textAlign: "center",
                }}
                className="rounded-3xl py-2 "
              >
                Fulltime
              </h2>
              <h3 className="text-md text-slate-300">2020-Present</h3>
            </div>
          </div>
          <div
            style={{ height: "1px" }}
            className="overlaySoft opacity-30  w-full  mx-auto"
          ></div>
        </div>
      </div>

      <div
        id="techstack"
        className="w-full text-center md:h-2/3 bg-mx-auto py-10 md:py-40 bg-black"
      >
        <div
          style={{ lineHeight: "78px" }}
          className="mx-auto items-center justify-center w-full "
        >
          <h1 className="text-3xl md:text-4xl text-slate-300">MY TECH STACK</h1>
          <h3
            style={{ color: colors.dark.primary }}
            className="text-2xl md:text-3xl pt-5"
          >
            Technologies I've been working with recently
          </h3>
        </div>

        <div className=" w-full md:w-2/3 pl-8  grid grid-cols-3 gap-y-5 md:grid-cols-9  md:gap-3 md:p-5 mt-10  mx-auto relative">
          <img className="w-20 h-20 md:w-28 md:h-28" src={reactNative}></img>
          <img src={html} className="w-20 h-20 md:w-28 md:h-28"></img>
          <img className="w-20 h-20 md:w-28 md:h-28" src={git}></img>
          <img className="w-20 h-20 md:w-28 md:h-28" src={tailwind}></img>
          <img className="w-20 h-20 md:w-28 md:h-28" src={css}></img>

          <img className="w-20 h-20 md:w-28 md:h-28" src={js}></img>
          <img className="w-20 h-20 md:w-28 md:h-28" src={react}></img>

          <img className="w-20 h-20 md:w-28 md:h-28" src={github}></img>
          <img className="w-20 h-20 md:w-28 md:h-28" src={bootstrap}></img>
        </div>
      </div>

      <div
        id="projects"
        className="w-full h-full bg-black md:pt-30 p-4 mx-auto text-center justify-center items-center"
      >
        <div className="mx-auto  md:mb-16 pb-4">
          <h1
            style={{ color: colors.dark.secondary }}
            className=" font-semibold text-center pb-4 text-3xl md:text-5xl"
          >
            Projects
          </h1>
          <h2
            style={{
              color: colors.dark.primary,
            }}
            className="text-3xl md:text-4xl"
          >
            Things I've built so far
          </h2>
        </div>

        <div className=" w-full items-center   bg-white h-screen justify-center md:gap-4 md:mx-auto">
          <div
            style={{
              boxShadow: "0px 5px 6px 1px rgba(222,222,222,0.7)",
            }}
            className=" w-4/5 h-96 md:w-1/5  cursor-pointer flex flex-col bg-white md:h-3/5 rounded-3xl overflow-hidden  "
          >
            <div className="w-full h-60 bg-black ">
              <img
                src={bg7}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              ></img>
            </div>
            
            <div
              style={{ backgroundColor: colors.dark.gray }}
              className="w-full p-3 h-full justify-center  items-center text-center "
            >
              <h1
                style={{ color: "black" }}
                className="md:pt-4 cursor-pointer text-md md:text-2xl"
              >
                {" "}
                Fenne Design
              </h1>{" "}
              <br />
              <h2
                className="cursor-pointer text-sm md:text-lg"
                style={{ color: colors.dark.primary }}
              >
                I developed the Fenne Design application with React Native. In
                this project, I made an e-commerce application for a company
                that produces marble products, trays and accessories. The
                application registration screen includes sections such as
                product catalogs, order screen, and adding favorite products.{" "}
              </h2>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 5px 6px 1px rgba(122,182,222,0.7)",
            }}
            className="w-1/5 flex flex-col bg-white h-3/5 rounded-3xl overflow-hidden "
          >
            <div className="w-full h-80 cursor-pointer bg-black">
              <img
                src={bg5}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              ></img>
            </div>
            <div
              style={{ backgroundColor: colors.dark.gray }}
              className="w-full cursor-pointer p-3 h-full justify-center items-center text-center"
            >
              <h1
                style={{ color: "black" }}
                className="pt-4 cursor-pointer text-2xl"
              >
                {" "}
                SociApp
              </h1>{" "}
              <br />
              <h2
                className="cursor-pointer"
                style={{ color: colors.dark.primary, fontSize: "17px" }}
              >
                I developed the social app with react native. With SocialApp, a
                social media application, you can share posts and articles and
                follow up with your friends.{" "}
              </h2>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 5px 6px 1px rgba(222,222,122,0.7)",
            }}
            className="w-1/5 flex flex-col bg-white h-3/5 rounded-3xl cursor-pointer overflow-hidden "
          >
            <div className="w-full cursor-pointer h-80 bg-black">
              <img
                src={bg4}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              ></img>
            </div>
            <div
              style={{ backgroundColor: colors.dark.gray }}
              className="w-full p-3 h-full justify-center items-center text-center"
            >
              <h1
                style={{ color: "black" }}
                className="pt-4 cursor-pointer text-2xl"
              >
                {" "}
                Motivation App
              </h1>{" "}
              <br />
              <h2
                className="cursor-pointer"
                style={{ color: colors.dark.primary, fontSize: "17px" }}
              >
                I developed the Motivation App with react native. Thanks to this
                application, you can read motivational words according to your
                mood.{" "}
              </h2>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 5px 6px 1px rgba(12,222,92,0.5)",
            }}
            className="w-1/5 flex flex-col bg-white cursor-pointer h-3/5 rounded-3xl overflow-hidden  "
          >
            <div className="w-full cursor-pointer h-80 bg-black">
              <img
                src={bg3}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              ></img>
            </div>
            <div
              style={{ backgroundColor: colors.dark.gray }}
              className="w-full p-3 cursor-pointer h-full justify-center items-center text-center"
            >
              <h1
                style={{ color: "black" }}
                className="pt-4 cursor-pointer text-2xl"
              >
                {" "}
                Weather WebPage
              </h1>{" "}
              <br />
              <h2
                className="cursor-pointer"
                style={{ color: colors.dark.primary, fontSize: "17px" }}
              >
                Developed the weather website with React Js. Thanks to this
                page, you can instantly follow the weather conditions based on
                your location information.{" "}
              </h2>
            </div>
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
