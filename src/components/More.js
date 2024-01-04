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
import caos from '../images/caos.jpg'


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
    title: "CINEMATOGRAPHY",
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
      <div className="flex w-full flex-col h-full justify-center">
        <div
          style={{ height: "30rem" }}
          className="w-full shadow-2xl shadow-slate-700"
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
        <CategoriComponent />
        <h1
          style={{ color: colors.dark.primary }}
          className="textContainer text-left font-DMSans font-semibold text-6xl pt-10 mb-10 px-80"
        >
          BLOG
        </h1>

        <div className="w-full flex bg-black flex-col justify-center items-center">
          <div className="w-4/5 p-5  px-10  bg-slate-600  justify-center gap-5 items-center shadow-2xl shadow-slate-00 flex flex-row ">
            <BlogCard data={felsefeData} />
            <BlogCard2 data={bilimData} />
            <BlogCard data={interstellarData} />
            <BlogCard data={sinematografiData} />
          </div>
          <div className="w-4/5 p-5 bg-slate-600 px-10 justify-center gap-5 items-center shadow-2xl shadow-slate-00 flex flex-row ">
            <BlogCard data={kitapData} />
            <BlogCard data={tarihData} />
            <BlogCard2 data={reactNativeData} />
            <BlogCard data={inancData} />
          </div>
          <div className="w-4/5 p-5  px-10  bg-slate-600  justify-center gap-5 items-center shadow-2xl shadow-slate-00 flex flex-row ">
            <BlogCard2 data={mitolojiData} />
            <BlogCard data={musicData} />
            <BlogCard data={hansZımmerData} />
            <BlogCard data={caosData} />
          </div>
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
