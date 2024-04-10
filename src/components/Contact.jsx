import Title from "../ui/Title";

import telegram from "/telegram.svg";

{
  /* <a
              className="inline-block"
              href="https://web.telegram.org/k/#@lisovyi13"
            >
              <img className="mt-2 scale-90" src={text} alt={title} />
            </a>
            <h2 className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]">
              {text}
            </h2> */
}
const Contact = () => {
  return (
    <section className="contact mb-10">
      <div className="container">
        <Title text="Contact" />
        <div className="contact-info grid break-words max-w-full grid-cols-1 sm:grid-cols-[55%,43.5%] mt-8 gap-6">
          <div className="bg-lightGray gap-6 p-6 rounded-md">
            <h5 className="text-gray text-[20px]">Phone</h5>
            <a
              className="block rounded-md hover:bg-gray duration-300"
              href="tel:+380687526241"
            >
              <h2 className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]">
                +38 (068) 752-62-41
              </h2>
            </a>
          </div>
          <div className="bg-lightGray gap-6 p-6 rounded-md">
            <h5 className="text-gray text-[20px]">Socials</h5>
            <a
              className="inline-block"
              href="https://web.telegram.org/k/#@lisovyi13"
            >
              <img
                className="mt-2 scale-90"
                src={telegram}
                alt={"my-telegram"}
              />
            </a>
          </div>
          <div className="bg-lightGray gap-6 p-6 rounded-md">
            <h5 className="text-gray text-[20px]">Address</h5>
            <a
              href="https://www.google.com/maps/place/Sobornosti+street,+42,+Poltava,+Poltava+region,+36000"
              target="_blank"
              className="block rounded-md hover:bg-gray duration-300"
            >
              <h2 className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]">
                Sobornosti street, 42, Poltava, Poltava region, 36000
              </h2>
            </a>
          </div>
          <div className="bg-lightGray gap-6 p-6 rounded-md">
            <h5 className="text-gray text-[20px]">Working Hours</h5>
            <h2 className="font-semibold mt-2 text-[23px] sm:text-[28px] lg:text-[40px]">
              24 hours a day
            </h2>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5172.926116991772!2d34.55058724047545!3d49.589016591622126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d825f6201e3de1%3A0xfa1c1f1114c6f7b0!2z0JrQvtGA0L_Rg9GB0L3Ri9C5INGB0LDQtA!5e0!3m2!1sru!2sua!4v1712772392876!5m2!1sru!2sua"
          width="100%"
          className="mt-6 rounded-md"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
