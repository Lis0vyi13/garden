const debounce = (callback) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, 500);
  };
};

export default debounce;
