import React from "react";
import SingleComponent from "./SingleFeature";
import Title from "../Title";

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <Title>Title</Title>
      <div className="flex flex-wrap justify-around -mx-4">
        <SingleComponent
          icon="/images/features/feature1.webp"
          heading="Free Shipping"
          paragraph="Free shipping over just for you"
        />
        <SingleComponent
          icon="/images/features/feature2.webp"
          heading="Support 24/7"
          paragraph="Contact us 24 hours a day"
        />
        <SingleComponent
          icon="/images/features/feature3.webp"
          heading="100% Money Back"
          paragraph="You have 30 days to Return"
        />
      </div>
    </div>
  );
};

export default Features;
