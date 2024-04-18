import { useState } from "react";
import Button from "../../ui/Button";
import CartListItem from "./CartListItem";

const CartList = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { items } = list;
  return (
    <>
      <ul
        className={`cart-list duration-300 flex flex-col ${
          isExpanded
            ? "h-auto"
            : "h-[545px] xxs:h-[606px] xsSm:h-[753px] md:h-[573px]"
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
      </ul>
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
