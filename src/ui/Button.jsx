const Button = ({ text, extraClassName }) => {
  const initialClassname =
    "bg-green duration-300 hover:bg-hoverGreen py-4 rounded-[6px] font-semibold text-white px-12";

  return (
    <button className={`${extraClassName} ${initialClassname}`}>{text}</button>
  );
};

export default Button;
