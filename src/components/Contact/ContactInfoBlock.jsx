import { motion } from "framer-motion";

const ContactInfoBlock = ({ contacts }) => {
  return (
    <div className="contact-info grid break-words max-w-full grid-cols-1 sm:grid-cols-[55%,43.2%] mt-8 gap-6">
      {contacts.map((contact, index) => (
        <motion.div
          key={index}
          className="bg-lightGray gap-6 p-6 rounded-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h5 className="text-gray text-[20px]">{contact.title}</h5>
          {contact.link ? (
            <a
              href={contact.link}
              target="_blank"
              className={`block rounded-md ${
                !contact.img ? "hover:bg-gray" : "inline-block"
              } duration-300`}
            >
              {contact.img ? (
                <motion.img
                  className="mt-2 scale-90"
                  src={contact.img}
                  alt={contact.title}
                  width={48}
                  height={48}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.25 }}
                />
              ) : (
                <motion.h2
                  className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {contact.text}
                </motion.h2>
              )}
            </a>
          ) : (
            <motion.h2
              className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {contact.text}
            </motion.h2>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfoBlock;
