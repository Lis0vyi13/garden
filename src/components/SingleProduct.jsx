import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Counter from "./Counter";

import Button from "../ui/Button";

import { useActions } from "../hooks/useActions";
import { products } from "../constants";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const MAX_DESCRIPTION_LENGTH = 965;

  const store = useSelector((state) => state.cartAmount);
  const { toggleCart } = useActions();
  const { id } = useParams();

  const [isExpanded, setIsExpanded] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const currentProduct = products.filter((prod) => prod.id === +id);
    setProduct(...currentProduct);
  }, [id]);

  const { name, img, price, discount, description } = product;

  const isAdded = store?.arr?.some((item) => item.id === +id);

  const modifiedDescription = isExpanded
    ? description
    : description?.length > MAX_DESCRIPTION_LENGTH
    ? description?.slice(0, MAX_DESCRIPTION_LENGTH - 3) + "..."
    : description;

  const currentPrice = discount ? Math.round(price - price * discount) : price;

  return (
    <section className={`${name?.toLowerCase()}`}>
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 sm:gap-10">
        <div className="product-img sm:w-1/2">
          <img
            style={{
              width: "100%",
              height: "calc(100% - 10px)",
              objectFit: "cover",
            }}
            className="max-w-[445px] sm:max-w-full"
            src={img}
            alt={name}
          />
        </div>
        <div className="product-content flex flex-col gap-4 sm:w-1/2">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl">
              {name}
            </h1>
          </div>
          <div className="flex items-center gap-7">
            <h2 className="font-bold text-[30px] lg:text-[42px] pt-1">
              ${currentPrice}
            </h2>
            {discount && (
              <h4 className="relative text-[20px] lg:text-[32px] text-gray line-through mt-5">
                ${price}
                <div className="absolute font-semibold text-[16px] p-1 px-2 rounded-md bg-green text-white right-[-70px] top-[-10px]">{`-${
                  discount * 100
                }%`}</div>
              </h4>
            )}
          </div>
          <div className="flex gap-4 flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full lg:w-fit">
              <Counter value={productCount} setValue={setProductCount} />
            </div>
            <Button
              text={isAdded ? "Added" : "Add to cart"}
              onClick={() => {
                toggleCart({ id: +id, amount: productCount });
              }}
              extraClassName={`w-full lg:w-3/5 text-[18px] text-white ${
                isAdded
                  ? "bg-black hover:bg-hoverGray"
                  : "bg-green hover:bg-hoverGreen"
              }`}
            />
          </div>
          <div className="product-description mt-2">
            <h5 className="font-semibold text-[20px]">Description</h5>
            <h4 className="mt-2">{modifiedDescription}</h4>
          </div>
          <span
            onClick={() => setIsExpanded((prev) => !prev)}
            className="underline w-fit duration-300 hover:text-green font-semibold cursor-pointer"
          >
            {isExpanded ? "Read less" : "Read more"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
