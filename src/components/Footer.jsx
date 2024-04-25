import { motion } from "framer-motion";

import Contact from "./Contact/Contact";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.15 }}
      layout={"position"}
      className={`footer`}
    >
      <Contact />
    </motion.footer>
  );
};

export default Footer;
