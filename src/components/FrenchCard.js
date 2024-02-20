import React from "react";
import Englishbg from "../images/eng.jpg";
import Frenchbg from "../images/french.png";

const FranchCard = () => {
  return (
    <div className="w-full h-60 m-2 md:h-96 md:m-10 md:mx-20 relative  rounded-xl shadow-lg bg-slate-200 hover:shadow-xl">
      <div className="w-full h-full flex flex-row rounded-xl overflow-hidden">
        <div className="absolute  overlayV opacity-0 md:opacity-100  w-10 h-10 top-36 md:left-[-98px] bg-white rounded-full z-10"></div>
        <div className="w-3/5 p-4">
          <h1
            style={{
              cursor: "pointer",
            }}
            className="text-start md:text-center md:py-4 font-DMSans text-[1.2rem] md:text-3xl font-bold rounded-tr-xl"
          >
            LEARNING FRENCH LANGUAGE AND CULTURE
          </h1>
          <div className="flex flex-col justify-center items-center font-Poppins text-[.9rem] md:text-xl">
            <p
              style={{
                cursor: "pointer",
              }}
            >
              <p className="hidden md:visible">
                 Learning the French language and immersing myself in its rich
              culture has been a long-standing goal of mine. Similar to my
              dedication to fitness, I see language learning as a mental workout
              that enhances both linguistic skills and cognitive abilities.
              </p>    
              
              <p >
                This section contains articles about many things I wrote in
                French.
              </p>
              
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
