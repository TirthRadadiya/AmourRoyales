import React from "react";

const Products = () => {
  return (
    <div className="my-10 sm:grid grid-cols-12">
      
      <div className="sm:col-span-3 md:col-span-2 border-2 border-black">Filter</div>
      <div className="sm:col-span-9 md:col-span-10 border-2 border-black">Content</div>
    </div>
  )
};

export default Products;
