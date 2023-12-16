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
import x from "./images/x.png";
import linkedin from "./images/linkedin-icon.svg";
import product from "./images/ss.png";
import product2 from "./images/ss2.png";
import bg from "./images/bg2.jpg";
import bg2 from "./images/bg3.jpg";
import bg3 from './images/bg4.jpg';
import bg4 from './images/bg5.jpg';
import bg5 from './images/bg6.jpg';
import bg6 from './images/bg7.jpg';
import bg7 from './images/bg8.jpg';
import { LinearGradient } from "react-text-gradients";
import "./App.css";
import card from "./components/card";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        text: colors.dark.primary,
        fontFamily: "Poppins",
      }}
      className="w-full h-screen justify-center items-center "
    >
      <div className=" h-40 flex  flex-row-reverse py-5 pl-25 px-20 mx-20  ">
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
            className="flex flex-row gap-20 items-center pt-5 text-xl font-DMSans"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#techStack">TechStack</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#hobbies">Hobbies</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
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

      <div className="container w-full h-2/4 mt-20 mx-auto flex  justify-evenly">
        <div
          style={{ color: colors.dark.secondary, fontFamily: "Poppins" }}
          className="p-10 w-3/5"
        >
          <h1
            style={{ lineHeight: "70px" }}
            className="text-6xl font-semibold mt-10"
          >
            Hi! <br /> My name is <br />{" "}
            <span>
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                Tuna Bostancıbaşı
              </LinearGradient>
            </span>
            <br /> I build things <br /> for web and mobile
          </h1>
        </div>
        <div className="  items-center justify-center  rounded-full">
          <img
            src={profile}
            style={{
              width: "360px",
              height: "360px",
            }}
            className=" overlay rounded-full mt-10 shadow-2xl  "
          ></img>
        </div>
      </div>

      <div
        id="about"
        className="w-full flex flex-col gap-10 justify-center items-start mt-56 pl-52  bg-black"
      >
        <div className="w-3/5 h-full bg-black justify-center px-5">
          <h1
            style={{ color: colors.dark.secondary }}
            className="font-Poppins text-5xl font-semibold "
          >
            ABOUT ME
          </h1>
          <br />
          <p
            style={{
              color: colors.dark.thirth,
            }}
            className="w-full font-Poppins text-2xl my-5"
          >
            First of all Hello my webpage. Nice to see you here.. I am Tuna
            Bostancıbaşı and I am currently university student as a computer
            engineering student in Denizli, Turkey. I am 23 years old. I am
            interest in and develop web and mobile.
          </p>
        </div>

        <div
          style={{
            color: colors.dark.secondary,
          }}
          className="w-3/5 h-full  bg-black justify-center px-5"
        >
          <h1
            style={{ color: colors.dark.secondary }}
            className=" font-Poppins text-5xl font-semibold py-10 "
          >
            WORK EXPERIENCE
          </h1>

          <div className="w-full h-full gap-2">
            <div className="w-full h-full justify-between flex flex-row items-center font-Poppins">
              <div className="gap-2 flex flex-col ">
                <h2 className="text-xl">React-Native Course</h2>
                <h3 className="text-lg text-slate-300">-Denizli / Turkey</h3>
              </div>

              <div className="gap-2 flex my-5 flex-col ">
                <h2
                  style={{
                    color: colors.dark.success,
                    backgroundColor: colors.dark.successbg,
                    textAlign: "center",
                  }}
                  className="rounded-3xl p-2"
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
                <h2 className="text-xl">ReactJS</h2>
                <h3 className="text-lg text-slate-300">-Denizli / Turkey</h3>
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
              <div className="gap-2 flex flex-col ">
                <h2 className="text-xl">HTML/CSS/JAVASCRIPT</h2>
                <h3 className="text-lg text-slate-300">
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

        <div className="w-3/5 h-full bg-black justify-center px-5">
          <div className="w-full">
            <h1
              style={{ color: colors.dark.secondary }}
              className="font-Poppins text-5xl font-semibold "
            >
              EDUCATION
            </h1>
          </div>
          <br />
          <div className="w-full h-full justify-between flex flex-row items-center font-Poppins">
            <div
              style={{ color: colors.dark.secondary }}
              className="gap-2 flex flex-col  "
            >
              <h2 className="text-xl">Yenişehir Anatolian HighSchool</h2>
              <h3 className="text-lg text-slate-300">-Sivas/Turkey</h3>
            </div>

            <div className="gap-2 flex my-5 flex-col ">
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
          <div className="w-full h-full justify-between flex flex-row items-center font-Poppins">
            <div
              style={{ color: colors.dark.secondary }}
              className="gap-2 flex flex-col  "
            >
              <h2 className="text-xl">Pamukkale University</h2>
              <h3 className="text-lg text-slate-300">- Denizli / Turkey</h3>
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
        style={{ textAlign: "center" }}
        className="w-full h-2/3 bg-mx-auto py-40 bg-black"
      >
        <div
          style={{ lineHeight: "78px" }}
          className="mx-auto items-center justify-center w-full  text-4xl"
        >
          <h1 style={{ fontWeight: "700", color: colors.dark.secondary }}>
            My Tech Stack
          </h1>
          <h3 style={{ color: colors.dark.primary }}>
            Technologies I've been working with recently
          </h3>
        </div>

        <div className="w-2/3  grid grid-cols-9  gap-3 p-5 mt-10  mx-auto relative">
          <div
            style={{
              height: "1px",
              width: "100%",
              zIndex: "1",
              bottom: "-15px",
            }}
            className="overlaySoft absolute bg-slate-400 "
          ></div>
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={html}
          ></img>
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={git}
          ></img>
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={tailwind}
          ></img>
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={css}
          ></img>

          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={js}
          ></img>
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={react}
          ></img>

          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={github}
          ></img>
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={bootstrap}
          ></img>
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={reactNative}
          ></img>
        </div>
      </div>

      <div className="w-full bg-black pt-30 mx-auto ">
        <div className="mx-auto mb-16" style={{ lineHeight: "85px" }}>
          <h1
            style={{ color: colors.dark.secondary }}
            className=" font-semibold text-center text-5xl"
          >
            Projects
          </h1>
          <h2
            style={{
              color: colors.dark.primary,
              textAlign: "center",
              fontSize: "50px",
            }}
          >
            Things I've built so far
          </h2>
        </div>

        <div className="flex flex-row w-full h-screen justify-center gap-4 mx-auto">
          <div
            style={{
              boxShadow: "0px 5px 6px 1px rgba(222,222,222,0.7)",
            }}
            className="w-1/5  flex flex-col bg-white h-3/5 rounded-3xl overflow-hidden  "
          >
            <div className="w-full h-80 bg-black">
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
              className="w-full p-3 h-full justify-center items-center text-center "
            >
              <h1 style={{ color: "black" }} className="pt-4 text-2xl">
                {" "}
                Fenne Design
              </h1>{" "}
              <br />
              <h2 style={{ color: colors.dark.primary }}>
                Fenne Design uygulamasını React Native ile geliştirdim. Bu
                projede mermer ürünleri, tepsi, ve aksesuar çeşitleri üreten bir
                firma için e-ticaret uygulaması yaptım. Uygulama kayıt ekranı,
                ürün katalogları, sipariş ekranı, favori ürünlerini ekleme gibi
                kısımlar içeriyor.{" "}
              </h2>
            </div>
          </div>
          <div
            style={{
              boxShadow: "0px 5px 6px 1px rgba(122,182,222,0.7)",
            }}
            className="w-1/5 flex flex-col bg-white h-3/5 rounded-3xl overflow-hidden "
          >
            <div className="w-full h-80 bg-black">
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
              className="w-full p-3 h-full justify-center items-center text-center"
            >
              <h1 style={{ color: "black" }} className="pt-4 text-2xl">
                {" "}
                SociApp
              </h1>{" "}
              <br />
              <h2 style={{ color: colors.dark.primary, fontSize: "17px" }}>
                Social app uygulamasını react native ile geliştirdim. Bir sosyal
                medya uygulaması olan SocialApp ile gönderiler ve yazılar
                paylaşabilir, arkadaşlarınızla takipleşebilirsiniz..{" "}
              </h2>
            </div>
          </div>
          <div
            style={{
              boxShadow: "0px 5px 6px 1px rgba(222,222,122,0.7)",
            }}
            className="w-1/5 flex flex-col bg-white h-3/5 rounded-3xl overflow-hidden "
          >
            <div className="w-full h-80 bg-black">
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
              <h1 style={{ color: "black" }} className="pt-4 text-2xl">
                {" "}
                Motivation App
              </h1>{" "}
              <br />
              <h2 style={{ color: colors.dark.primary, fontSize: "17px" }}>
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
            className="w-1/5 flex flex-col bg-white h-3/5 rounded-3xl overflow-hidden  "
          >
            <div className="w-full h-80 bg-black">
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
              className="w-full p-3 h-full justify-center items-center text-center"
            >
              <h1 style={{ color: "black" }} className="pt-4 text-2xl">
                {" "}
                Weather WebPage
              </h1>{" "}
              <br />
              <h2 style={{ color: colors.dark.primary, fontSize: "17px" }}>
                Developed the weather website with React Js. Thanks to this
                page, you can instantly follow the weather conditions based on
                your location information.{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black justify-between flex flex-row items-center px-40 p-10 mx-auto">
        <div className="text-4xl">
          <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
            Tuna Bostancıbaşı
          </LinearGradient>
        </div>
        <div
          style={{ color: colors.dark.primary }}
          className="flex flex-row gap-5 justify-center items-center text-xl "
        >
          <ul className="flex flex-row gap-5">
            <li>
              <a href="#number">+90 538 722 72 58</a>
            </li>
            <li>
              <a href="#email"> tunabstcn@gmail.com</a>
            </li>
          </ul>
          <ul className="flex flex-row gap-5 ml-10">
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
        className="w-full justify-between flex flex-row items-center bg-black p-12 px-40 "
      >
        <div>
          <ul className="font-DMSans flex flex-row gap-8 text-2xl">
            <li>
              <a href="#home"> Home</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#skills"> Skills</a>
            </li>
            <li>
              <a href="#techstack"> TechStack</a>
            </li>
            <li>
              <a href="#hobbies"> Hobbies</a>
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
        >
          <h1>
            Designed and built by
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              Tuna Bostancıbaşı
            </LinearGradient>
          </h1>
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
