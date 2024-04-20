import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import Counter from "./Counter";

import Button from "../ui/Button";

import { useCartActions } from "../hooks/useCartActions";

import { getProductById } from "../utils/getProductById";

const MAX_DESCRIPTION_LENGTH = 965;

const SingleProduct = () => {
  const { id } = useParams();
  const { isAdded, toggleCart } = useCartActions(id);

  const [isExpanded, setIsExpanded] = useState(false);
  const [productCounter, setProductCounter] = useState(1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const currentProduct = getProductById(id);
    setProduct(currentProduct);
  }, [id]);

  const { name, img, price, discount, description } = product;
  const currentPrice = discount ? Math.round(price - price * discount) : price;

  const activeButtonStyles = isAdded
    ? "bg-black hover:bg-hoverGray"
    : "bg-green hover:bg-hoverGreen";

  const modifiedDescription = isExpanded
    ? description
    : description?.length > MAX_DESCRIPTION_LENGTH
    ? description?.slice(0, MAX_DESCRIPTION_LENGTH - 3) + "..."
    : description;

  return (
    <section className={`${name?.toLowerCase()}`}>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={`Product: ${name}`} />
      </Helmet>
      <div className="w-full flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-10">
        <div className="product-img md:w-1/2 h-[320px] xxs:h-[435px] md:h-[470px] lg:h-[570px] flex items-center justify-center">
          <img
            className="h-full xs:max-w-[445px] md:max-w-full object-cover aspect-square"
            src={img}
            alt={name}
          />
        </div>
        <div className="product-content flex flex-col gap-4 xxs:mt-3 md:mt-0 md:w-1/2">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl">
              {name}
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <h2 className="font-bold text-[30px] lg:text-[42px] pt-1">
              ${currentPrice}
            </h2>
            {discount && (
              <h4 className="relative text-[20px] lg:text-[32px] text-gray line-through mt-4">
                ${price}
                <div className="absolute font-semibold text-[16px] p-1 px-2 rounded-md bg-green text-white right-[-70px] top-[-10px]">{`-${
                  discount * 100
                }%`}</div>
              </h4>
            )}
          </div>
          <div className="flex gap-4 flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="w-full lg:w-fit">
              <Counter value={productCounter} setValue={setProductCounter} />
            </div>
            <Button
              text={isAdded ? "Added" : "Add to cart"}
              onClick={() => {
                toggleCart({ ...product, quantity: productCounter });
              }}
              extraClassName={`w-full lg:w-3/5 text-[18px] text-white ${activeButtonStyles}`}
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
