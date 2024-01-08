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
      className="cardContainer w-full flex flex-row rounded-2xl shadow-2xl relative overflow-hidden"
      style={{
        width: "30%",
        height: "30rem",
        backgroundImage: `url(${data.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 1px 15px 3px rgba(155, 150, 110, .3)",
      }}
    >
      <FontAwesomeIcon
        onClick={toggleBookmark}
        icon={faBookmark}
        size="lg"
        color={isBookmarked ? "yellow" : "white"}
        className="m-3 z-10"
      />
      <div
        onClick={toggleFullText}
        className="text-4xl p-5 w-full cursor-pointer justify-center items-center h-full absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500"
        style={{
          backgroundColor: showFullText
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(0, 0, 0, 0.3)",
          borderRadius: showFullText ? "0" : "1rem",
          height: showFullText ? "100%" : "20%",
          bottom: showFullText ? "0" : "15rem",
          overflow: "hidden",
          cursor: showFullText ? "pointer" : "pointer",
        }}
      >
        {showFullText ? (
          <h1
            style={{ fontSize: "45px", color: "white", cursor: "pointer" }}
            className="text-white p-5 text-center w-full h-full font-DMSans"
          >
            {data.title}
            <h5 style={{ overflow: showFullText ? "hidden" : "visible" }}>
              Devamı..
            </h5>
            <br />
            <br />
            {data.text}
          </h1>
        ) : (
          <h2
            style={{ fontSize: "45px", color: "white" }}
            className="text-white p-5 text-center w-full h-full font-DMSans"
          >
            {data.title}
            <br />
            <br />
            {data.text.substring(0, 100) + "..."}
          </h2>
        )}
      </div>
    </div>
  );
};
