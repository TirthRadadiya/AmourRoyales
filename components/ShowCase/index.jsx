"use client";

import { useState } from "react";
import Button from "../Button";
import "./showcase.css";
import Link from "next/link";

const DotContent = ({
  imgSrc,
  alt,
  className,
  visible,
  mouseOver,
  href,
  title,
  discountedPrice,
  actualPrice,
}) => {
  return (
    <>
      <div
        className={`dot-content-wrapper transition-opacity p-3 flex h-fit z-[999] font-500 bg-white absolute ${className} ${
          visible ? "dot-content-visible" : "dot-content-invisible"
        }`}
        onMouseOver={mouseOver}
      >
        <img src={imgSrc} alt={alt} className="w-[90px] object-contain" />
        <div className="dot-content w-[70%] ms-3">
          <Link href={href}>
            <p className="hover:text-[#c97f5f] cursor-pointer font-[700] transition-all">
              {title}
            </p>
          </Link>
          <div className="text-[14px] mt-1">
            <span className="font-[700] text-[#ed1d24]">{discountedPrice}</span>
            <span className="ms-3 text-[#9892be]">
              <s>{actualPrice}</s>
            </span>
          </div>
          <Link
            href={href}
            className="text-[14px] text-[#9892be] border-b-2 pb-1 hover:text-[#c97f5f] transition-all"
          >
            View Product
          </Link>
        </div>
      </div>
    </>
  );
};

const ShowCase1 = () => {
  const [dotNumber, setDotNumber] = useState(0);

  return (
    <>
      <div className="showcase grid grid-cols-1 md:grid-cols-2 my-40">
        <div className="relative">
          <img
            src="https://risingtheme.com/html/demo-becute/becute/assets/img/banner/banner28.webp"
            alt="TODO"
            onMouseOver={() => setDotNumber(0)}
          />
          <div className="dot dot-1" onMouseOver={() => setDotNumber(1)}></div>
          <div
            className="dot dot-2 absolute top-[50%] left-[51%]"
            onMouseOver={() => setDotNumber(2)}
          ></div>
          <div
            className="dot dot-3 absolute bottom-[15%] left-[17%]"
            onMouseOver={() => setDotNumber(3)}
          ></div>
          <DotContent
            imgSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product3.webp"
            className="top-[19.5%] left-[30%]"
            visible={dotNumber === 1}
            mouseOver={() => setDotNumber(1)}
            href="/product"
            title="Z 7-8mm Freshwater"
            discountedPrice="$260.52"
            actualPrice="$320.00"
          />
          <DotContent
            imgSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product3.webp"
            className="bottom-[30%] left-[35%]"
            visible={dotNumber === 2}
            mouseOver={() => setDotNumber(2)}
            href="/product"
            title="Z 7-8mm Freshwater"
            discountedPrice="$260.52"
            actualPrice="$320.00"
          />
          <DotContent
            imgSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product3.webp"
            className="bottom-[20%] left-[4%]"
            visible={dotNumber === 3}
            mouseOver={() => setDotNumber(3)}
            href="/product"
            title="Z 7-8mm Freshwater"
            discountedPrice="$260.52"
            actualPrice="$320.00"
          />
        </div>
        <div className="showcase-content-wrapper flex flex-col justify-center bg-[#faeeeee6]">
          <div className="w-100 sm:w-[60%] mx-auto showcase-content">
            <p className="font-500 text-xl mb-5">Brighten up your look</p>
            <h2 className="font-700 text-5xl my-5">Soak up the savings</h2>
            <p className="text-[16px] my-5">
              Brighten up your look with vibrant gemstone jewelry.
            </p>
            <Button linkButton className="btn-primary w-max" href="/shop">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase1;
