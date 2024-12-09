import CategorySlider from "../../components/Products/CategorySlider";

const Products = () => {
  return (
    <>
      <CategorySlider />
      <div className="my-10 flex md:max-w-[1253px] mx-auto">
        <div className="md:w-[25%] border-2 border-black h-[100vh] translate-x-[-100%] sm:translate-x-0">
          Filter
        </div>
        <div className="md:w-[75%] border-2 border-black">
          Content
        </div>
      </div>
    </>
  );
};

export default Products;
