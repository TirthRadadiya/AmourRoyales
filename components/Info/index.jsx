import React from "react";
import Image from "next/image";
import "./info.css";

const Info = () => {
  return (
    <section className="info-section">
      <div className="left-box">Left Content</div>
      <div className="right-images">
        <div className="image-wrapper bottom-image bounce">
          <img src="/images/1.jpg" alt="Bottom Image" />
        </div>
        <div className="image-wrapper top-image">
          <img src="/images/2.jpg" alt="Top Image" />
        </div>
        <div className="image-wrapper third-image">
          <img src="/images/3.jpg" alt="Third Image" />
        </div>
      </div>
    </section>
  );
};

export default Info;
