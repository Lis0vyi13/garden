import { Link } from "react-router-dom";

import Button from "../ui/Button";

import bg from "/bg.webp";

const Hero = () => {
  return (
    <section className="hero relative -mt-3">
      <div className="img after:content[''] after:-z-10 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-40">
        <img
          className="absolute -z-10 h-full w-full object-cover"
          src={bg}
          alt="background"
        />
      </div>

      <div className="container">
        <h1 className="text-white pt-[100px] md:pt-20 font-bold text-[28px] xs:text-[35px] sm:text-[42px] md:text-[50px] lg:text-[72px] md:max-w-[650px] lg:max-w-[820px]">
          Amazing Discounts on Garden Products!
        </h1>
        <Link to="all-products?from=&to=&discount=true&sortBy=default">
          <Button
            text="Check out"
            isGreen
            extraClassName="mt-10 mb-[140px] md:mb-[200px]"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
