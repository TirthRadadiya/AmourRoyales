"use client";

import Card from "@/components/Cards/SingleCard";
import { useEffect, useState } from "react";

// import CategorySlider from "../../components/Products/CategorySlider";
import Button from "../../components/Button";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addFilterOptions } from "@/redux/features/filter-slice";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { color, gold, price, weight } = useAppSelector(
    (state) => state.filter.filters
  );

  console.log(color, gold, price, weight);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      if (data?.products.length) setProducts(data.products);
    };

    fetchProducts("https://dummyjson.com/products");
  }, []);

  return (
    <>
      {/* <CategorySlider /> */}
      <div className="my-10 flex w-full md:max-w-[90vw] mx-auto relative">
        <div className="filters">
          <div
            className="filter1 p-3 rounded-[5px]"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <h2 className="border-l-2 border-black m-3 ps-2">Gold</h2>
            <div className="ms-10">
              <div>
                <input
                  type="radio"
                  id="16kt"
                  name="gold"
                  value="16kt"
                  checked={gold === "16kt"}
                  onChange={(e) =>
                    dispatch(
                      addFilterOptions({ key: "gold", value: e.target.value })
                    )
                  }
                />
                <label className="ms-2" htmlFor="16kt">
                  16kt
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="18kt"
                  name="gold"
                  value="18kt"
                  checked={gold === "18kt"}
                  onChange={(e) =>
                    dispatch(
                      addFilterOptions({ key: "gold", value: e.target.value })
                    )
                  }
                />
                <label className="ms-2" htmlFor="18kt">
                  18kt
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="22kt"
                  name="gold"
                  value="22kt"
                  checked={gold === "22kt"}
                  onChange={(e) =>
                    dispatch(
                      addFilterOptions({ key: "gold", value: e.target.value })
                    )
                  }
                />
                <label className="ms-2" htmlFor="22kt">
                  22kt
                </label>
              </div>
            </div>
          </div>
          <div
            className="filter2 p-3 rounded-[5px] mt-10"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <h2 className="border-l-2 border-black m-3 ps-2">Gold Color</h2>
            <div className="ms-10">
              <div>
                <input
                  type="radio"
                  id="yellow"
                  name="drone"
                  value="yellow"
                  checked={color === "yellow"}
                  onChange={(e) =>
                    dispatch(
                      addFilterOptions({ key: "color", value: e.target.value })
                    )
                  }
                />
                <label className="ms-2" htmlFor="yellow">
                  Yellow
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="white"
                  name="drone"
                  value="white"
                  checked={color === "white"}
                  onChange={(e) =>
                    dispatch(
                      addFilterOptions({ key: "color", value: e.target.value })
                    )
                  }
                />
                <label className="ms-2" htmlFor="white">
                  White
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="rose"
                  name="drone"
                  value="rose"
                  checked={color === "rose"}
                  onChange={(e) =>
                    dispatch(
                      addFilterOptions({ key: "color", value: e.target.value })
                    )
                  }
                />
                <label className="ms-2" htmlFor="rose">
                  Rose
                </label>
              </div>
            </div>
          </div>
          <div
            className="filter3 p-3 rounded-[5px] mt-10"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <h2 className="border-l-2 border-black m-3 ps-2">Price Range</h2>
            <div className="ms-10 flex items-center">
              <input
                type="range"
                id="volume"
                value={price}
                name="volume"
                min="299"
                max="3999"
                step="10"
                onChange={(e) =>
                  dispatch(
                    addFilterOptions({ key: "price", value: e.target.value })
                  )
                }
              />
              <label className="ms-2" htmlFor="volume">
                Volume
              </label>
            </div>
          </div>
          <div
            className="filter4 p-3 rounded-[5px] mt-10"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <h2 className="border-l-2 border-black m-3 ps-2">Diamon Weight</h2>
            <div className="ms-10 flex items-center">
              <input
                type="range"
                id="volume"
                value={weight}
                name="volume"
                min="0"
                max="10"
                step="0.1"
                checked={color === "yellow"}
                  onChange={(e) =>
                    dispatch(
                      addFilterOptions({ key: "weight", value: e.target.value })
                    )
                  }
              />
              <label className="ms-2" htmlFor="volume">
                Volume
              </label>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="filter-btn">
            <Button className="btn-primary">filters</Button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 text-center lg:px-10">
            {products.map((card, index) => (
              <Card card={card} key={index} className="pb-10" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
