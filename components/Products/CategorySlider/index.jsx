"use client";

import React from "react";
import { Slide } from "react-slideshow-image";

const CategorySlider = () => {
  const images = [
    "https://placehold.co/250",
    "https://placehold.co/250",
    "https://placehold.co/250",
    "https://placehold.co/250",
    "https://placehold.co/250",
    "https://placehold.co/250",
    "https://placehold.co/250",
  ];

  return (
    <div className="w-full md:w-[80%] px-10 md:px-0 mt-10 mx-auto">
      <Slide
        slidesToScroll={1}
        slidesToShow={4}
        arrows={true}
        transitionDuration={300}
        infinite={true}
        canSwipe={true}
        autoplay={true}
        duration={3000}
      >
        {images.map((img) => (
          <img src={img} alt="TODO" className="m-3 h-[250px]" key={img} />
        ))}
      </Slide>
    </div>
  );
};

export default CategorySlider;
