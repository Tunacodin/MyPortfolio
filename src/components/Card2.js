import React from "react";
import bg from "../images/bg2.jpg";
export const BlogCard2 = ({data}) => {
  return (
    <div
      style={{
        width: "40%",
        height: "30rem",
        backgroundImage: `url(${data.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        boxShadow: "0px 1px 15px 5px rgba(55, 140, 210, .4)",
      }}
      className="cardContainer"
    >
      <div className="  w-full h-full   ">
        <h1 className="cardText text-5xl  text-center w-full h-full font-DMSans">
          {data.title}
          <br />
          <br />
          <span className="text-white bg-slate-800 p-2 text-3xl text-center font-DMSans">
            {data.text}
          </span>
        </h1>
      </div>
    </div>
  );
};
