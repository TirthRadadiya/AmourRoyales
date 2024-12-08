"use client";

import React, { useEffect, useState } from "react";
import "./card.css";
import Card from "./SingleCard";
import Title from "../Title";

const CardContainer = ({ title, fetchURL = "", className = "" }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      if (data?.products.length) setProducts(data.products);
    };

    if (fetchURL) {
      fetchProducts(fetchURL);
    }
  }, []);

  return (
    <>
      {products.length ? (
        <>
          <div className={className}>
            <Title>{title}</Title>
            <div className="scrollable-container">
              {products.map((card, index) => (
                <Card card={card} key={index} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-2xl py-5 text-center">
          fetching products for you...
        </p>
      )}
    </>
  );
};

export default CardContainer;
