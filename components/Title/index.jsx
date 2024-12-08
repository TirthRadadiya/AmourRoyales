import React from "react";

const Title = ({ children, heading = false }) => {
  return (
    <h1 className="text-4xl text-center mb-5 sm:mb-10 text-[#C97F5F]">
      {children}
    </h1>
  );
};

export default Title;
