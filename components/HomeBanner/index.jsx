import "./homebanner.css";
import Button from "../Button";

const SingleBanner = ({ imgSrc, alt, children, imgPlacement }) => {
  return (
    <>
      <div className="banner-container relative m-5">
        <img src={imgSrc} alt={alt} />
        <div className={`banner-content ${imgPlacement}`}>{children}</div>
      </div>
    </>
  );
};

const HomeBanners = () => {
  return (
    <>
      <div className="banners grid grid-cols-1 md:grid-cols-2 max-w-[1113px] mx-auto">
        <div>
          <SingleBanner
            imgSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/banner/banner25.webp"
            alt="TODO"
            imgPlacement="top-[50%] right-[20px] -translate-y-[50%]"
          >
            <p className="font-500">Store Beautlux</p>
            <h2 className="text-4xl font-700">
              Rings <br /> Collection
            </h2>
            <Button linkButton className="btn-primary" href="/shop">
              Shop Now
            </Button>
          </SingleBanner>
          <SingleBanner
            imgSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/banner/banner26.webp"
            alt="TODO"
            imgPlacement="top-[50%] left-[30px] -translate-y-[50%]"
          >
            <p className="font-500">Store Beautlux</p>
            <h2 className="text-4xl font-700">
              Soak up <br /> The Savings
            </h2>
            <Button linkButton className="btn-primary" href="/shop">
              Shop Now
            </Button>
          </SingleBanner>
        </div>
        <SingleBanner
          imgSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/banner/banner27.webp"
          alt="TODO"
          imgPlacement="top-[30px] left-[30px]"
        >
          <p className="font-500">Store Beautlux</p>
          <h2 className="text-4xl font-700">
            Soak up <br /> The Savings
          </h2>
          <Button linkButton className="btn-primary" href="/shop">
            Shop Now
          </Button>
        </SingleBanner>
      </div>
    </>
  );
};

export default HomeBanners;
