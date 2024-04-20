import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../ui/Button";

import bg from "/images/bg.webp";

const Hero = () => {
  return (
    <motion.section
      className="hero relative -mt-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="img after:content[''] after:-z-10 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-40">
        <img
          style={{ height: "calc(100% + 100px)" }}
          className="absolute mt-[-100px] -z-10 w-full object-cover"
          src={bg}
          alt="background"
        />
      </div>

      <div className="container">
        <motion.h1
          className="text-white pt-[100px] md:pt-20 font-bold text-[28px] xs:text-[35px] sm:text-[42px] md:text-[50px] lg:text-[72px] md:max-w-[650px] lg:max-w-[820px]"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Amazing Discounts on Garden Products!
        </motion.h1>
        <Link to="all-products?from=&to=&discount=true&sortBy=default">
          <Button
            text="Check out"
            isGreen
            extraClassName="mt-10 mb-[140px] md:mb-[200px]"
          />
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;
