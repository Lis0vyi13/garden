const PageWrapper = ({ children }) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-10 md:gap-20 pt-7 md:pt-12">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
