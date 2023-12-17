import React from "react";
import fitness from "../images/fitness.png"

const Fitness = () => {
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
            BODY BUILDING
          </h1>
          <div className="flex flex-col font-Poppins text-xl">
            <p
              style={{
                cursor: "pointer",
              }}
              className="p-2"
            >
              One of the goals I set before starting university was to gain
              weight and muscle mass. My own health and mental resilience also
              depends on taking good care of my body and keeping it fit. Along
              with these, doing fitness both gives me discipline and increases
              my motivation. I have been doing fitness intermittently for about
              3 years.
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
            src={fitness}
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

export default Fitness;
