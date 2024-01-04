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
      }}
      className="cardContainer"
    >
      <div className="text-4xl  w-full h-full   ">
        <h1 className="cardText text-center w-full h-full font-DMSans">
          {data.title}
          <br />
          <br />
          <span className="text-white text-3xl text-center font-DMSans">
            {data.text}
          </span>
        </h1>
      </div>
    </div>
  );
};
