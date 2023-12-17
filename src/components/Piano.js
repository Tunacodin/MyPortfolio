import React from "react";
import Englishbg from "../images/eng.jpg";
import piano from "../images/piano.jpeg";

export default function Piano () {
  return (
    <div className="w-full h-80 m-10 mx-20 relative  rounded-xl shadow-lg bg-slate-200 hover:shadow-xl">
      <div className="w-full h-full flex flex-row rounded-xl overflow-hidden">
        <div className="absolute  overlayV  w-10 h-10 top-36 left-[-98px] bg-white rounded-full z-10"></div>
        <div
          style={{
            cursor: "pointer",
          }}
          className="w-2/5 h-full overflow-hidden rounded-l-xl"
        >
          <img
            src={piano}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="English Background"
          />
        </div>
        <div className="flex flex-col w-3/5 p-4">
          <h1
            style={{
              cursor: "pointer",
            }}
            className="text-center py-4 font-DMSans text-3xl font-bold rounded-tr-xl"
          >
            LEARNING PLAYING PIANO
          </h1>
          <div className="flex flex-col font-Poppins text-xl">
            <p
              style={{
                cursor: "pointer",
              }}
            >
              While I was still in the preparatory year of university, which
              corresponds to the pandemic period, I watched the movie
              Interstellar and was very impressed. After the movie, I set the
              goal of playing the soundtrack of that movie. After the pandemic,
              I wanted to apply to a few places to study piano, but since they
              were expensive, I taught myself. Now I can play a few more songs,
              including Interstellar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

