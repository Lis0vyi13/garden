const Button = ({ text, extraClassName, onClick, isGreen, disabled }) => {
  const initialClassname = `duration-300 py-4 rounded-[6px] font-semibold px-12 ${
    isGreen && "text-white bg-green hover:bg-hoverGreen"
  }`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${extraClassName} ${initialClassname} disabled:bg-hoverGray`}
    >
      {text}
    </button>
  );
};

export default Button;
