import { useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import CartList from "./CartList";

import Title from "../../ui/Title";
import Button from "../../ui/Button";

import { useCart } from "../../hooks/useCart";
import { useCartQuantity } from "../../hooks/useCartQuantity";
import { useCartTotal } from "../../hooks/useCartTotal";

const Cart = () => {
  const { store } = useCart();
  const { quantity } = useCartQuantity();
  const { total } = useCartTotal();
  const [isOrdered, setIsOrdered] = useState(false);

  async function onPayment() {
    setIsOrdered(true);

    const stripe = await loadStripe(
      "pk_test_51P7L3KDgyJmtJe68W3khXK9oCXDyUzXPP1dOb18twBORDwOgw2uTm9X1lGADHuRvwtt4o6HMHnGXcHfIdHUtTbL600xjCRAbJv",
    );
    await stripe.redirectToCheckout({
      lineItems: store.items.map((item) => ({
        price: item.api_key,
        quantity: item.quantity,
      })),
      mode: "payment",
      successUrl: "https://lis0vyi13.github.io/garden/#/success",
      cancelUrl: "https://lis0vyi13.github.io/garden/#/cancel",
    });

    setIsOrdered(false);
  }

  return (
    <section className="cart flex flex-col gap-10">
      <Title text="Shopping cart" buttonText="Back to the store" />
      {store.value > 0 ? (
        <div className="cart-content flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[60%]">
            <CartList list={store} />
          </div>
          <div className="bg-lightGray h-full rounded-xl xl:w-[40%] p-7">
            <h3 className="font-bold text-4xl">Order details</h3>
            <div className="pt-4 gap-6 flex flex-col xs:flex-row justify-between">
              <div className="w-full xs:w-1/2">
                <h4 className="text-gray text-2xl sm:text-4xl leading-[3rem]">
                  {quantity} items total
                </h4>
              </div>
              <div className="flex self-end items-end">
                <h2 className="font-bold text-[37px] lg:text-[46px] break-all">
                  ${total}
                </h2>
              </div>
            </div>
            <div className="cart-button h-full flex mt-6">
              <Button
                disabled={isOrdered}
                onClick={onPayment}
                text="Order"
                extraClassName={`w-full self-end`}
                isGreen
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="-mt-4">
          <p>Looks like you have no items in your basket currently.</p>
          <Link to="/all-products?from=&to=&discount=&sortBy=default&category=All+products">
            <Button
              extraClassName="mt-5 w-full xs:w-auto"
              isGreen
              text="Continue Shopping"
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
