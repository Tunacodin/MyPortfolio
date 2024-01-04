import React from "react";
import bg from "../images/felsefe.jpg";
import "../App.css"
export const BlogCard = ({ data }) => {
  return (
    <div
      style={{
        width: "30%",
        height: "30rem",
        backgroundImage: `url(${data.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      className="cardContainer rounded-2xl shadow-2xl "
    >
      <div className="text-4xl p-5 w-full justify-center items-center h-full   ">
        <h1 className="cardText p-5 text-center w-full h-full font-DMSans">
        
          {data.title}
          <br />
          <br/>
           <span className="text-white bg-slate-800 text-3xl text-center font-DMSans">
              {data.text}
            </span>
          
           
        
        </h1>
      </div>
    </div>
  );
};
