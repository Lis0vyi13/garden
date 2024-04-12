import { useState } from "react";
import { Link } from "react-router-dom";

const ProductsCardItem = ({ name, img, price, discount, url }) => {
  const [isHover, setIsHover] = useState(false);
  const currentValue = discount ? Math.round(price - price * discount) : price;

  const titleName = name.length > 22 ? name.slice(0, 22) + "..." : name;
  return (
    <div
      className={`card ${name} max-w-[300px] min-h-[390px] border rounded-xl border-divider`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link className="relative" to={url}>
        <div
          className={`relative rounded-t-xl overflow-hidden after:opacity-0 after:content[''] after:duration-300 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black ${
            isHover && "after:opacity-50"
          } `}
        >
          <img className="rounded-t-xl" src={img} alt={name} />
        </div>
        <div className="item-content p-6 py-3">
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
