import CardContainer from "@/components/Cards/CardContainer";
import Features from "@/components/Features/Index";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import ImageContentSection from "@/components/InfoSections";
import Button from "@/components/Button";
import HomeBanner from "@/components/HomeBanner";
import ShowCase from "../components/ShowCase"

// https://dummyjson.com/docs/products#products-all - fake api

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ImageContentSection
        imageSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/other/about.webp"
        altText="Sample Image 2"
        reverse={true}
      >
        <p className="color-primary text-xl font-500">About</p>
        <h2 className="text-2xl font-bold">Curated by color</h2>
        <p className="color-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <Button className="btn-primary uppercase">View More</Button>
      </ImageContentSection>
      <ImageContentSection
        imageSrc="https://risingtheme.com/html/demo-becute/becute/assets/img/other/about2.webp"
        altText="Sample Image 2"
        reverse={false}
      >
        <h2 className="text-2xl font-bold">
          We have the princess cuts to rule them all
        </h2>
        <p className="color-secondary">
          Ehuese marws dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <Button className="btn-primary uppercase">View More</Button>
      </ImageContentSection>
      <CardContainer
        title="Trending Products"
        className="mt-20"
        fetchURL="https://dummyjson.com/products"
      />
      <Info />
      <CardContainer title="Best Sellers" />
      <HomeBanner />
      <ShowCase />
    </>
  );
}
