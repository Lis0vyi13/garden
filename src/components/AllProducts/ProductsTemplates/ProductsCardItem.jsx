import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../ui/Button";

import { useActions } from "../../../hooks/useActions";

const ProductsCardItem = ({ name, img, price, discount, url, id }) => {
  const { toggleCart } = useActions();
  const [isHover, setIsHover] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const currentValue = discount ? Math.round(price - price * discount) : price;

  const titleName = name.length > 22 ? name.slice(0, 21) + "..." : name;
  return (
    <div
      className={`card relative z-10 ${name} max-w-[300px] min-h-[390px] border rounded-xl border-divider`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Button
        text={isAdded ? "Added" : `Add to cart`}
        onClick={() => {
          toggleCart(id);
          setIsAdded((prevState) => !prevState);
        }}
        extraClassName={` ${isHover && "bottom-[140px]"} ${
          isAdded
            ? "bg-black hover:bg-hoverGray"
            : "bg-green hover:bg-hoverGreen"
        } text-white absolute bottom-16 left-1/2 -translate-x-1/2 px-4 w-[147px] z-10`}
      />
      <Link className="relative" to={url}>
        <div className={`relative z-0 w-[297px] h-[266px] overflow-hidden`}>
          <img className="rounded-t-xl" src={img} alt={name} />
        </div>
        <div className="relative border-t-2 border-t-divider bg-white z-10 item-content p-6 py-3">
          <h2 title={name} className="font-semibold text-[20px] ">
            {titleName}
          </h2>
          <div className="price flex items-center gap-2">
            <h1 className="font-semibold text-[28px] md:text-[40px] pt-1">
              ${currentValue}
            </h1>
            {discount && (
              <h3 className="text-[20px] text-gray line-through mt-3">
                ${price}
              </h3>
            )}
          </div>
        </div>
        {discount && (
          <div className="discount absolute right-3 top-3 rounded-md bg-green text-[20px] text-white px-2">
            -{discount * 100}%
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProductsCardItem;
