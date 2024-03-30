const Title = ({ text, buttonText = "" }) => {
  return buttonText ? (
    <div className="flex gap-8 items-center justify-between">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {text}
      </h1>
      <div className="divider bg-divider -mr-8 w-full h-[2px]"></div>
      <button className="relative duration-300 min-w-[160px] rounded-[6px] hover:bg-green hover:text-white text-gray py-[8px] px-4 bg-transparent border-divider border-2">
        {buttonText}
      </button>
    </div>
  ) : (
    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
      {text}
    </h1>
  );
};

export default Title;
