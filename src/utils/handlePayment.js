import { loadStripe } from "@stripe/stripe-js";

export const handlePayment = async (store, setIsOrdered) => {
  setIsOrdered(true);

  const stripe = await loadStripe(
    "pk_test_51P7L3KDgyJmtJe68W3khXK9oCXDyUzXPP1dOb18twBORDwOgw2uTm9X1lGADHuRvwtt4o6HMHnGXcHfIdHUtTbL600xjCRAbJv",
  );

  if (stripe) {
    await stripe.redirectToCheckout({
      lineItems: store.items.map((item) => ({
        price: item.api_key,
        quantity: item.quantity,
      })),
      mode: "payment",
      successUrl: "https://lis0vyi13.github.io/garden/#/success",
      cancelUrl: "https://lis0vyi13.github.io/garden/#/cancel",
    });
  }

  setIsOrdered(false);
};
