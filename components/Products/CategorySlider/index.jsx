"use client";

import { useState } from "react";

const CategorySlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/150/1",
    "https://via.placeholder.com/150/2",
    "https://via.placeholder.com/150/3",
    "https://via.placeholder.com/150/4",
    "https://via.placeholder.com/150/5",
    "https://via.placeholder.com/150/6",
    "https://via.placeholder.com/150/7",
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  const visibleImages = images.slice(startIndex, startIndex + 5);

  return (
    <div className="md:max-w-2xl mx-auto my-10">
      <h1 className="text-center text-2xl">Shop By Categories</h1>
      <div className="w-full max-w-4xl mx-auto mt-8">
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            className="absolute left-0 z-10 px-4 py-2 text-white bg-gray-700 rounded-l-md hover:bg-gray-900"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            Prev
          </button>

          {/* Slider */}
          <div className="flex">
            {visibleImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-1/5 object-cover transition-transform duration-300"
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            className="absolute right-0 z-10 px-4 py-2 text-white bg-gray-700 rounded-r-md hover:bg-gray-900"
            onClick={handleNext}
            disabled={startIndex + 5 >= images.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
