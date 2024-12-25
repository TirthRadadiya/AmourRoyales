import ProductSlider from "../ProductImages";

const ProductDetail = ({ images }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <ProductSlider images={images} />
        </div>
        <div className="w-full md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold">Z 7-8mm Freshwater Button</h1>
          <div className="flex items-center my-2">
            <span className="text-xl text-primary">$239.52</span>
            <span className="line-through text-zinc-500 ml-2">$362.00</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <span>★★★★☆</span>
            <span className="ml-2 text-zinc-500">(106 Reviews)</span>
          </div>
          <p className="text-zinc-700 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit is. Deserunt
            totam dolores ea numquam labore!
          </p>
          <div className="my-4">
            <span className="font-semibold">Color:</span>
            <div className="flex space-x-2 mt-2">
              <button className="w-8 h-8 rounded-full border border-zinc-300 bg-red-500"></button>
              <button className="w-8 h-8 rounded-full border border-zinc-300 bg-yellow-500"></button>
              <button className="w-8 h-8 rounded-full border border-zinc-300 bg-green-500"></button>
            </div>
          </div>
          <div className="my-4">
            <span className="font-semibold">Weight:</span>
            <div className="flex space-x-4 mt-2">
              <button className="px-3 py-1 border border-zinc-300 rounded">
                5 kg
              </button>
              <button className="px-3 py-1 border border-zinc-300 rounded">
                3 kg
              </button>
              <button className="px-3 py-1 border border-zinc-300 rounded">
                2 kg
              </button>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
              Add To Cart
            </button>
            <button className="ml-4 text-zinc-500 hover:text-zinc-700">
              Add to Wishlist
            </button>
          </div>
          <div className="mt-4">
            <span className="font-semibold">Social Share:</span>
            <div className="flex space-x-2 mt-2">
              <button className="text-zinc-500 hover:text-zinc-700">
                Facebook
              </button>
              <button className="text-zinc-500 hover:text-zinc-700">
                Twitter
              </button>
              <button className="text-zinc-500 hover:text-zinc-700">
                Instagram
              </button>
              <button className="text-zinc-500 hover:text-zinc-700">
                YouTube
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
