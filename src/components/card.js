import React from "react";

const card = () => {
  return (
    <div
      style={{
        width: "370px",
        height: "370px",
        borderRadius: "10%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
              padding: "20px",
        backgroundColor:'white',
      }}
    >
          <div >
              
      </div>
      <div></div>
    </div>
  );
};

export default card;
