const Title = ({ text, buttonText = "", extras }) => {
  const titleClasses = `font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${extras}`;
  const buttonClasses =
    "relative duration-300 bg-white text-[13px] xs:text-[15px] min-w-[125px] xs:min-w-[160px] rounded-[6px] hover:bg-green hover:text-white text-gray py-[8px] px-4 bg-transparent border-divider border-2";

  return (
    <>
      {buttonText && (
        <div className={`flex gap-4 xs:gap-8 items-center justify-between`}>
          <h1 className={titleClasses}>{text}</h1>
          <div className="divider bg-divider -mr-8 w-full h-[2px]"></div>
          <button className={buttonClasses}>{buttonText}</button>
        </div>
      )}

      {!buttonText && <h1 className={titleClasses}>{text}</h1>}
    </>
  );
};

export default Title;
