const debounce = (onChange) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      onChange();
    }, 500);
  };
};

export default debounce;
