import React from "react";
import Englishbg from "../images/eng.jpg";
import Frenchbg from "../images/french.png";

const FranchCard = () => {
  return (
    <div className="w-full h-80 m-10 mx-20 relative rounded-xl shadow-lg bg-slate-200 hover:shadow-xl">
      <div className="absolute overlayV  w-10 h-10 top-36 left-[-98px] bg-white rounded-full z-10"></div>

      <div className="w-full h-full flex flex-row rounded-xl ">
        <div className="w-3/5 p-4">
          <h1
            style={{
              cursor: "pointer",
            }}
            className="text-center py-4 font-DMSans text-3xl font-bold rounded-tl-xl"
          >
            LEARNING FRENCH LANGUAGE AND CULTURE
          </h1>
          <div className="flex flex-col font-Poppins text-xl">
            <p
              style={{
                cursor: "pointer",
              }}
              className="p-2"
            >
              I aim to learn French as a third language. Actually, learning
              French does not seem to contribute much to my business life, but
              the French language sounds very aesthetic and relaxing. It has a
              very poetic side and the more I listen to it, the more I want to
              listen to it. I thought, why don't I learn? In this part, my
              French adventure begins.
            </p>
          </div>
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          className="w-2/5 relative overflow-hidden rounded-r-xl"
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
