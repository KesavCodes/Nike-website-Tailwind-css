import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {

  const [showcaseShoeImg, setShowcaseShoeImg] = useState(shoes[0].bigShoe)

  const changeShowcaseShoeHandler = (shoeImg) => {
    setShowcaseShoeImg(shoeImg)
  }
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} alt="Arrow right" />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          className="object-contain relative z-10"
          src={showcaseShoeImg}
          alt="shoe collection"
        />
        <div className="flex absolute -bottom-[5%] sm:gap-6 gap-4 items-center justify-center sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.id}>
              <ShoeCard 
                imgUrl={shoe}
                bigShoeImg={showcaseShoeImg}
                changeBigShoeHandler = {changeShowcaseShoeHandler}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
