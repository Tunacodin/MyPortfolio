import React from "react";
import Englishbg from "../images/eng.jpg";
import Frenchbg from "../images/french.png";

const FranchCard = () => {
  return (
    <div className="w-full h-60 md:h-80 md:m-10 md:mx-20 relative  rounded-xl shadow-lg bg-slate-200 hover:shadow-xl">
      <div className="w-full h-full flex flex-row rounded-xl overflow-hidden">
        <div className="absolute  overlayV hidden md:visible  w-10 h-10 top-36 md:left-[-98px] bg-white rounded-full z-10"></div>
        <div className="w-3/5 p-4">
          <h1
            style={{
              cursor: "pointer",
            }}
            className="text-start md:text-center md:py-4 font-DMSans text-[1.2rem] md:text-3xl font-bold rounded-tr-xl"
          >
            LEARNING FRENCH LANGUAGE AND CULTURE
          </h1>
          <div className="flex flex-col font-Poppins text-[.9rem]">
            <p
              style={{
                cursor: "pointer",
              }}
              className="py-2"
            >
              Actually, learning
              French does not seem to contribute much to my business life, but
              the French language sounds very aesthetic and relaxing. 
            </p>
          </div>
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          className="w-1/2 md:w-2/5 relative overflow-hidden rounded-r-xl"
        >
          <img
            src={Frenchbg}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="English Background"
          />
        </div>
      </div>
    </div>
  );
};

export default FranchCard;
