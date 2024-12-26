"use client";

import ProductDetail from "@/components/ProductDetail";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  const path = usePathname();

  const fetchProduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${+path.split("/")[2]}`
    );

    const data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
    "https://via.placeholder.com/400x300?text=Image+4",
  ];

  return (
    <div className="w-full md:w-[80%] mx-auto mt-20 px-10 md:px-0">
      <ProductDetail images={images} />
    </div>
  );
};

export default Product;
