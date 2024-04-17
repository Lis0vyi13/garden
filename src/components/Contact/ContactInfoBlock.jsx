const ContactInfoBlock = ({ contacts }) => {
  return (
    <div className="contact-info grid break-words max-w-full grid-cols-1 sm:grid-cols-[55%,43.2%] mt-8 gap-6">
      {contacts.map((contact, index) => (
        <div key={index} className="bg-lightGray gap-6 p-6 rounded-md">
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
                <img
                  className="mt-2 scale-90"
                  src={contact.img}
                  alt={contact.title}
                />
              ) : (
                <h2 className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]">
                  {contact.text}
                </h2>
              )}
            </a>
          ) : (
            <h2 className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]">
              {contact.text}
            </h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfoBlock;
