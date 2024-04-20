const Counter = ({ value, setValue }) => {
  const onSubtract = () => {
    const newValue = Math.max(value - 1, 1);
    setValue(newValue);
  };

  const onSum = () => {
    const newValue = Math.min(Math.max(value + 1, 1), 100);
    setValue(newValue);
  };

  const debouncedHandleInputChange = (e) => {
    let newValue = !e.target.value ? 1 : parseInt(e.target.value);
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > 100) {
      newValue = 100;
    }
    setValue(newValue);
  };

  return (
    <section className="counter flex justify-between border border-divider h-16">
      <button
        onClick={onSubtract}
        className="subtract flex justify-center items-center border h-full w-[58px] text-[42px] text-gray border-divider hover:bg-lightGray duration-300"
      >
        -
      </button>
      <input
        value={value}
        className="h-full w-full lg:w-[112px] outline-none text-[18px] border border-divider text-center"
        placeholder="1"
        onChange={debouncedHandleInputChange}
        type="number"
        min={1}
        max={100}
      />
      <button
        onClick={onSum}
        className="sum flex justify-center items-center border h-full w-[58px] text-[42px] text-gray border-divider hover:bg-lightGray duration-300"
      >
        +
      </button>
    </section>
  );
};

export default Counter;
