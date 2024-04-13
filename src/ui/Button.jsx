const Button = ({ text, extraClassName, onClick, isGreen }) => {
  const initialClassname = `duration-300 py-4 rounded-[6px] font-semibold px-12 ${
    isGreen && "text-white bg-green hover:bg-hoverGreen"
  }`;

  return (
    <button
      onClick={onClick}
      className={`${extraClassName} ${initialClassname}`}
    >
      {text}
    </button>
  );
};

export default Button;
