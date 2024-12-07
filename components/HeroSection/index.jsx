// components/HeroSection.tsx
"use client";

// Slider Documentation
// https://fullpage.caferati.me/ - creative
// https://swiperjs.com/react#installation - creative

// https://react-slideshow-image.netlify.app/ - using

import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./hero.css";
import { useAppSelector } from "@/redux/store";

const HeroSection = () => {
  const { value: tempVal } = useAppSelector((state) => state.temp);

  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

  return (
    <div className="hero-slider">
      <Zoom scale={1.4} duration={2000} canSwipe={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img alt="Slide Image" src={image} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default HeroSection;
