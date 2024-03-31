import Title from "../ui/Title";

const Discount = () => {
  return (
    <section className="discount">
      <div className="container">
        <div className="discount-content bg-gradient-to-r from-linearGreen1 to-linearGreen2 rounded-xl">
          <Title
            text="5% off on the first order"
            extras="text-center text-white"
          />
          <form className="form"></form>
        </div>
      </div>
    </section>
  );
};

export default Discount;
