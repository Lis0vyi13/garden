import { motion } from "framer-motion";

import DiscountForm from "./DiscountForm";

import Title from "../../ui/Title";

import formImg from "/images/form-content-img.webp";

const Discount = () => {
  return (
    <section className="discount">
      <div className="container">
        <div className="discount-content relative flex flex-col p-6 pb-10 bg-gradient-to-r from-linearGreen1 to-linearGreen2 rounded-xl">
          <Title
            text="5% off on the first order"
            extras="text-center text-white relative z-[1]"
          />
          <div className="relative z-[1] discount-form mt-8 md:mt-12 flex self-end w-full lg:w-2/5">
            <DiscountForm />
          </div>
          <motion.div
            className="absolute lg:block hidden w-full h-full bottom-0 left-0 z-0 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="absolute lg:scale-[.73] lg:bottom-[-50px] lg:left-[-65px] lgXl:scale-[.85] lgXl:bottom-[-30px] lgXl:left-0"
              src={formImg}
              alt="form img"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.25 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
