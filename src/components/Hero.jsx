import bg from "/bg.jpg";

import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="hero relative">
      <div className="img after:content[''] after:-z-10 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-40">
        <img
          className="absolute -z-10 h-full w-full object-cover"
          src={bg}
          alt="background"
        />
      </div>

      <div className="container">
        <h1 className="text-white pt-20 font-bold text-[72px] max-w-[820px]">
          Amazing Discounts on Garden Products!
        </h1>
        <Button text="Check out" extraClassName="mt-10 mb-[200px]" />
      </div>
    </section>
  );
};

export default Hero;
