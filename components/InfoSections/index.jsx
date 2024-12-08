import React from "react";

const ImageContentSection = ({
  imageSrc,
  altText,
  children,
  reverse = false,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[1113px] mx-auto gap-6 md:gap-8 p-10 container">
      {/* Conditional class for reversing on desktop */}
      <div className={`flex-1 ${reverse ? "md:order-first" : "md:order-last"}`}>
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 items-center">
        <div className="text-center md:text-left space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default ImageContentSection;
