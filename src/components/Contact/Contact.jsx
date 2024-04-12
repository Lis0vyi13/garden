import ContactInfoBlock from "./ContactInfoBlock";

import Title from "../../ui/Title";

import { contacts } from "../../constants";

const Contact = () => {
  return (
    <section className="contact mb-10 pt-10 md:pt-20">
      <div className="container">
        <Title text="Contact" />
        <ContactInfoBlock contacts={contacts} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5172.926116991772!2d34.55058724047545!3d49.589016591622126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d825f6201e3de1%3A0xfa1c1f1114c6f7b0!2z0JrQvtGA0L_Rg9GB0L3Ri9C5INGB0LDQtA!5e0!3m2!1sru!2sua!4v1712772392876!5m2!1sru!2sua"
          width="100%"
          className="mt-6 rounded-md"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
