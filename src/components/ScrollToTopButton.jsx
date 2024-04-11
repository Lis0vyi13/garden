import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, transform: "translateY(15%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-green hover:bg-hoverGreen duration-300 text-[30px] hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full"
        >
          🡹
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
