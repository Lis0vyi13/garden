const Input = ({
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  extras,
}) => {
  return (
    <input
      className={`${extras} bg-transparent font-bold placeholder:font-normal placeholder:text-[16px] px-4 py-2 text-[18px] placeholder-white text-white border outline-none rounded-md border-white w-full`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
