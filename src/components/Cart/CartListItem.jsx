import { useState } from "react";

import Counter from "../Counter";

import { useCartActions } from "../../hooks/useCartActions";

const CartListItem = ({ item }) => {
  const [value, setValue] = useState(item.quantity);
  const { price, discount, quantity, id, name, img } = item;
  const { removeCartItem } = useCartActions();

  const currentPrice = discount ? Math.round(price - price * discount) : price;

  return (
    <div className="w-[290px] xxs:w-[350px] xsSm:w-auto xsSm:h-[240px] md:h-[180px] flex flex-col xsSm:flex-row gap-4 border border-divider rounded-xl">
      <div className="cart-list-item__img flexitems-center justify-center h-full xsSm:min-w-[200px] border-r border-divider">
        <img
          className="object-cover h-full w-full aspect-square rounded-l-xl rounded-r-xl xsSm:rounded-r-none"
          src={img}
          alt={name}
        />
      </div>
      <div className="cart-list-item__info flex flex-col w-full p-6 gap-6">
        <div className="flex items-center justify-between -mt-2 xsSm:mt-0">
          <h1 className="text-[20px]">{name}</h1>
          <button
            onClick={() => removeCartItem(item)}
            className="remove p-2 rounded-full duration-300 hover:bg-hoverLightGray"
          >
            <div className="relative h-6 w-6">
              <span className="absolute top-1/2 -translate-y-1/2 left-0 rotate-45 h-[2px] w-full bg-black"></span>
              <span className="absolute top-1/2 -translate-y-1/2 left-0 -rotate-45 w-full h-[2px] bg-black"></span>
            </div>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between xl:justify-normal gap-6">
          <div className="w-[230px]">
            <Counter id={id} value={value} setValue={setValue} />
          </div>
          <div
            className={`flex ${
              discount ? "pr-[55px] xl:pr-0" : ""
            } items-center gap-4`}
          >
            <h2 className="font-bold text-[30px] lg:text-[40px] pt-1">
              ${currentPrice * quantity}
            </h2>
            {discount && (
              <h4 className="relative text-[20px] text-gray line-through mt-4">
                ${price * quantity}
                <div className="absolute font-semibold text-[14px] p-1 px-2 rounded-md bg-green text-white right-[-55px] top-[-10px]">{`-${
                  discount * 100
                }%`}</div>
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
