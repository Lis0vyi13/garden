const Button = ({ text, extraClassName }) => {
  const initialClassname =
    "duration-300 py-4 rounded-[6px] font-semibold px-12";

  return (
    <button className={`${extraClassName} ${initialClassname}`}>{text}</button>
  );
};

export default Button;
