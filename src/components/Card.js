import React from 'react'
import bg from '../images/bg2.jpg'
export const BlogCard = ()=>  {
  return (
    <div
      style={{
        width: "20rem",
        height: "30rem",
        backgroundColor: "white",
      }}
    >
      <img
        src={bg}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity:'1'
        }}
      >
      
      </img>
    </div>
  );
}
