import React, { useState } from "react";
import bg from "../images/felsefe.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export const BlogCard = ({ data }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const [showFullText, setShowFullText] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div
      className="cardContainer md:w-[100%] md:h-[30rem] cursor-pointer w-full h-60 flex flex-row rounded-2xl shadow-2xl relative overflow-hidden"
      style={{
        backgroundImage: `url(${data.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 1px 15px 3px rgba(155, 150, 110, .5)",
      }}
    >
      <FontAwesomeIcon
        onClick={toggleBookmark}
        icon={faBookmark}
        size={isBookmarked ? "3x" : "2x"}
        color={isBookmarked ? "yellow" : "white"}
        className="m-3 z-10"
      />
      <button
        style={{ top: "7px", right: "5px ", width: "70px" }}
        className="absolute text-xl text-center bg-white cursor-pointer mr-2 rounded-md z-10 "
      >
        Read
      </button>

      <div
        onClick={toggleFullText}
        className="text-4xl p-5 w-full cursor-pointer justify-center items-center h-full absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500"
        style={{
          backgroundColor: showFullText
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(0, 0, 0, 0.4)",
          borderRadius: showFullText ? "0" : "1rem",
          height: showFullText ? "100%" : "30%",
          bottom: showFullText ? "0" : "1rem",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showFullText ? (
          <h1 className="text-white relative text-xl md:text-3xl mt-10 md:my-24 text-center mx-auto w-full h-full font-DMSans">
            {data.title}
            <br />
            <br />
            <h2 className="text-lg md:text-2xl md:mt-4 cursor-pointer">
              {data.text}
            </h2>
          </h1>
        ) : (
          <h1 className="text-white text-xl md:text-3xl  md:pt-11 cursor-pointer text-center w-full h-full font-DMSans">
            {data.title}

            <br />
            <br />
            <h2 className="text-lg md:text-2xl md:mt-4 cursor-pointer">
              {data.text}
            </h2>
          </h1>
        )}
      </div>
    </div>
  );
};
