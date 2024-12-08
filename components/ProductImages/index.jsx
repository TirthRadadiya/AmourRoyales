"use client";

import React, { useState } from "react";
import "./productSlider.css";

const ProductSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Array of image URLs (replace with your image paths)

  return (
    <div className="product-slider">
      {/* Main Image */}
      <div className="main-image relative">
        <img src={images[selectedImage]} alt={`Product ${selectedImage + 1}`} />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-zinc-100">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
            alt="Zoom"
          />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnails-container">
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImage ? "thumbnail active" : "thumbnail"
              }
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
