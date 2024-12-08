import "./productcategories.css";
import Link from "next/link";

const SingleCategoryProduct = ({
  title = "",
  href = "",
  imgSrc,
  alt,
  discountedPrice,
  actualPrice,
}) => {
  return (
    <>
      <Link href={href} className="flex w-100 my-3">
        <img src={imgSrc} alt={alt} className="w-[125px] object-contain" />
        <div className="dot-content w-[70%] ms-3">
          <p className="hover:text-[#c97f5f] cursor-pointer font-[700] transition-all mb-5">
            {title}
          </p>
          <div className="text-[14px] mt-1">
            <span className="font-[700] text-[#ed1d24]">{discountedPrice}</span>
            <span className="ms-3 text-[#9892be]">
              <s>{actualPrice}</s>
            </span>
          </div>
          {/* <Link
              href={href}
              className="text-[14px] text-[#9892be] border-b-2 pb-1 hover:text-[#c97f5f] transition-all"
            >
              View Product
            </Link> */}
        </div>
      </Link>
    </>
  );
};

const SingleCategory = ({ title = "", products = [] }) => {
  return (
    <div>
      <h2 className="color-primary text-4xl mb-5">{title}</h2>
      <div className="flex flex-col">
        <SingleCategoryProduct {...products[0]} />
        <SingleCategoryProduct {...products[1]} />
        <SingleCategoryProduct {...products[2]} />
      </div>
    </div>
  );
};

const ProductCategories = () => {
  const data = [
    {
      title: "Featured Products",
      products: [
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
      ],
    },
    {
      title: "Onsale Products",
      products: [
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
      ],
    },
    {
      title: "Top Products",
      products: [
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
        {
          imgSrc:
            "https://risingtheme.com/html/demo-becute/becute/assets/img/product/small-product/product1.webp",
          alt: "TODO",
          title: "Z 7-8mm Freshwater Button is",
          discountedPrice: "$699.00",
          actualPrice: "$799.00",
          href: "/products",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80%] mx-auto">
      <SingleCategory {...data[0]} />
      <SingleCategory {...data[1]} />
      <SingleCategory {...data[2]} />
    </div>
  );
};

export default ProductCategories;
