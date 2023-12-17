import React from "react";
import cinema from "../images/cinema.png"
const EnglishCard = () => {
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
            src={cinema}
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
            ACQUIRE FILM CULTURE
          </h1>
          <div className="flex flex-col font-Poppins text-xl">
            <p
              style={{
                cursor: "pointer",
              }}
              className="p-2"
            >
              I was introduced to movies when I was twenty years old, and the
              first movies I watched influenced me and served as a stepping
              stone for dozens of movies I would watch later. I watched many
              movies, some even 4-5 times. Movies play an important role in
              creating my own character and changing my perspective on the
              universe and humanity. That's why I love cinema so much. My
              favorite directors are Christopher Nolan and Nuri Bilge Ceylan..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishCard;
