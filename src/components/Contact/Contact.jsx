import { motion } from "framer-motion";

import ContactInfoBlock from "./ContactInfoBlock";

import Title from "../../ui/Title";

import { contacts } from "../../constants";

const Contact = () => {
  return (
    <motion.section
      className="contact mb-10 pt-10 md:pt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className="container">
        <Title text="Contact" />
        <ContactInfoBlock contacts={contacts} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1057.5631386413486!2d34.506453527118076!3d49.54063048729311!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1713047171700!5m2!1sru!2sua"
          width="100%"
          height="600"
          className="mt-6 rounded-md"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.section>
  );
};

export default Contact;
