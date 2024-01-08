import React from "react";
import blog from "../images/blog.jpg";
import { Header } from "./Header";
import { CategoriComponent } from "./CategoriComponent";
import { BlogCard } from "./Card";
import { BlogCard2 } from "./Card2";
import felsefe from "../images/felsefe.jpg"
import reactNative from "../images/react-native.png"
import bilim from "../images/sci.jpg"
import interstellar from '../images/interstellar.png'
import kitap from '../images/books.jpg'
import sinematografi from "../images/cinema.png"
import tarih from "../images/history.jpg"
import mitoloji from '../images/mithology.png'
import inanç from '../images/Faith.png'
import music from '../images/music.jpg'
import hanszimmer from '../images/HansZımmer.jpg'
import caos from '../images/caos1.jpg'
import { LinearGradient } from "react-text-gradients";
import twitter from "../images/twitter-6.svg";
import github from "../images/github-icon-2.svg";
import MoreAbout from "../MoreAbout";
import linkedin from "../images/linkedin-icon.svg";



export const More = () => {
  const felsefeData = {
    bg: felsefe,
    title: "PHILOSOPHIA",
    text: "My Ideas About Philoshophia",
    date: "07-08-2021",
  };
  const interstellarData = {
    bg: interstellar,
    title:'INTERSTELLAR',
    text:'Why Is That Best One? ',
    date: '07-08-2021'
  };

  const reactNativeData = {
    bg: reactNative,
    title: "REACT NATIVE",
    text: "Basics Of React Native One Of Populer Mobile Tech",
    date: "07-08-2021",
  };
  const sinematografiData = {
    bg: sinematografi,
    title: "CINEMA",
    text: "How Are The Movıes We Admire Made?",
    date: "07-08-2021",
  };
    const bilimData = {
      bg: bilim,
      title: "SCIENCE",
      text: "What Is Not Science?",
      date: "07-08-2021",
    };
  
    const kitapData = {
      bg: kitap,
      title: "BOOKS",
      text: "Books Which Are Affected Me",
      date: "07-08-2021",
    };
    const tarihData = {
      bg: tarih,
      title: "HISTORY",
      text: "Historycal events that everyone should knows",
      date: "04-01-2024",
    };
  
    const inancData = {
      bg: inanç,
      title: "FAITH",
      text: "Why People Has Faith",
      date: "04-01-2024",
    };
  
    const mitolojiData = {
      bg: mitoloji,
      title: "HISTORY",
      text: "Historycal Events That Everyone Should Knows",
      date: "04-01-2024",
    };
    const musicData = {
      bg: music,
      title: "MUSIC THEORY",
      text: "A Theory That Can Change Your Mindset",
      date: "04-01-2024",
    };
  
    const hansZımmerData = {
      bg: hanszimmer,
      title: "HANS ZIMMER",
      text: "Why Zimmer Most Populer Movies Music Composer?",
      date: "04-01-2024",
    };
    const caosData = {
      bg: caos,
      title: "CAOS THEORY",
      text: "What Is The Caos Theory?",
      date: "04-01-2024",
    };
  
  return (
    <div className="w-full bg-black h-full">
      <Header />
      <div className="flex w-full flex-col h-full justify-center mb-10">
        <div
          style={{ height: "30rem" }}
          className="w-full shadow-xl shadow-slate-800"
        >
          <img
            src={blog}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: "0.9",
            }}
            alt="Blog Cover"
          />
        </div>
        <h1
          style={{ color: colors.dark.primary }}
          className="textContainer text-left font-DMSans font-semibold text-6xl pt-10  pl-48"
        >
          BLOG
        </h1>
        <CategoriComponent />

        <div className="w-full h-full flex bg-black flex-col justify-center items-center relative ">
       
          <div
          
            className="w-4/5 p-5  px-10  justify-center gap-5 items-center shadow-2xl shadow-slate-00 flex flex-row "
          >
            <BlogCard data={felsefeData} />
            <BlogCard data={bilimData} />
            <BlogCard data={interstellarData} />
            <BlogCard data={sinematografiData} />
          </div>
          <div className="w-4/5 p-5 px-10 justify-center gap-5 items-center shadow-2xl shadow-slate-00 flex flex-row ">
            <BlogCard data={kitapData} />
            <BlogCard data={tarihData} />
            <BlogCard data={inancData} />
            <BlogCard data={reactNativeData} />
          </div>
          <div className="w-4/5 p-5  px-10   justify-center gap-5 items-center shadow-2xl shadow-slate-00 flex flex-row ">
            <BlogCard data={mitolojiData} />
            <BlogCard data={musicData} />
            <BlogCard data={hansZımmerData} />
            <BlogCard data={caosData} />
          </div>
        </div>
      </div>

      <div
        id="contacts"
        className="w-full bg-black justify-between flex flex-row items-center px-40 p-10 mx-auto"
      >
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
              <a href="#email"> tunabstcnx@gmail.com</a>
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
              <a href="#projects"> Projects</a>
            </li>
            <li>
              <a href="#techstack"> TechStack</a>
            </li>
            <li>
              <a href={MoreAbout}> Hobbies</a>
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

export default More;
