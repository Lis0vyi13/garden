import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import CartListItem from "./CartListItem";

import Button from "../../ui/Button";

const CartList = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { items } = list;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <>
      <motion.ul
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        animate={controls}
        className={`cart-list duration-300 flex flex-col ${
          isExpanded
            ? "h-auto"
            : `h-[545px] xxs:h-[606px] ${
                items.length > 3 ? "xsSm:h-[753px] md:h-[573px]" : "xsSm:h-min"
              }`
        } overflow-hidden gap-4`}
      >
        {items.map((item) => (
          <li
            className="cart-list-item flex justify-center items-center xsSm:block"
            key={item.id}
          >
            <CartListItem item={item} />
          </li>
        ))}
      </motion.ul>
      <div
        className={`flex items-center justify-center mt-2 ${
          items.length > 3
            ? "xsSm:flex"
            : items.length > 1
            ? "flex xsSm:hidden"
            : "hidden"
        }`}
      >
        <Button
          onClick={() => setIsExpanded((prev) => !prev)}
          isGreen
          text={`${isExpanded ? "Show less" : "Show more"}`}
        />
      </div>
    </>
  );
};

export default CartList;
