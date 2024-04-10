import { useRef } from "react";
import { motion } from "framer-motion";

const Modal = ({ type, isActive, setIsActive }) => {
  const modalRef = useRef();
  const messages = {
    successOrder:
      "Your order has been successfully placed on the website. \nA manager will contact you shortly to confirm your order.",
    successDiscount: "You've successfully received a discount.",
  };

  const closeModal = () => {
    modalRef.current.style.transform = "translateY(150%)";
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };
  return (
    <>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          ref={modalRef}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 150,
          }}
          className="fixed bg-green z-50 right-1 left-1 xs:right-6 sm:left-[unset] bottom-6 px-8 py-5 duration-500 text-white sm:w-[520px] rounded-xl"
        >
          <h1 className="font-semibold pb-1 xs:pb-0 text-[24px] xs:text-[32px]">
            Congratulations!
          </h1>
          <p className="max-w-[290px] pt-4 text-[14px] xs:text-[18px] xs:max-w-[400px] font-semibold">
            {messages[type]}
          </p>
          <button
            onClick={closeModal}
            className="cross cursor-pointer absolute right-[22px] xs:right-[32px] top-[18px] w-8 h-8"
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
