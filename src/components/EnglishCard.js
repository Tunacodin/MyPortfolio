import React from "react";
import Englishbg from "../images/eng.jpg";

const EnglishCard = () => {
  return (
    <div className="w-full h-60 md:h-80 md:m-10 md:mx-20 relative  rounded-xl shadow-lg bg-slate-200 hover:shadow-xl">
      <div className="w-full h-full flex flex-row rounded-xl overflow-hidden">
        <div className="absolute  overlayV hidden md:visible  w-10 h-10 top-36 md:left-[-98px] bg-white rounded-full z-10"></div>
        <div
          style={{
            cursor: "pointer",
          }}
          className="w-1/2 h-full flex flex-col md:flex-row overflow-hidden rounded-l-xl"
        >
          <img
            src={Englishbg}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="English Background"
          />
        </div>
        <div className="flex flex-col  w-3/5 p-4">
          <h1
            style={{
              cursor: "pointer",
            }}
            className="text-start md:text-center md:py-4 font-DMSans text-[1.2rem] md:text-3xl font-bold rounded-tr-xl"
          >
            LEARNING ENGLISH LANGUAGE AND CULTURE
          </h1>
          <div className="flex flex-col font-Poppins text-[.9rem] md:text-xl">
            <p
              style={{
                cursor: "pointer",
              }}
              className="py-2"
            >
              Human beings can find many things that add value to their own
              existence.This section contains articles about many things I wrote in English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishCard;
