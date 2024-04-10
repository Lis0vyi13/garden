import { motion } from "framer-motion";

const Modal = ({ type, isActive, setIsActive }) => {
  const messages = {
    successOrder:
      "Your order has been successfully placed on the website. \nA manager will contact you shortly to confirm your order.",
    successDiscount: "You've successfully received a discount.",
  };

  const closeModal = () => {
    setIsActive(false);
  };
  return (
    <>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 150,
          }}
          className="fixed bg-green z-50 right-8 bottom-6 px-8 py-5 text-white sm:w-[520px] rounded-xl"
        >
          <h1 className="font-semibold pb-1 xs:pb-0 text-[26px] xs:text-[32px]">
            Congratulations!
          </h1>
          <p className="max-w-[300px] pt-4 text-[15px] xs:text-[18px] xs:max-w-[400px] font-semibold">
            {messages[type]}
          </p>
          <button
            onClick={closeModal}
            className="cross cursor-pointer absolute right-[32px] top-[18px] w-8 h-8"
          >
            <div className="absolute p-4 inset-0 w-full h-full">
              <div className="absolute inset-x-0 mx-auto h-1 bg-white transform rotate-45"></div>
              <div className="absolute inset-x-0 mx-auto h-1 bg-white transform -rotate-45"></div>
            </div>
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
