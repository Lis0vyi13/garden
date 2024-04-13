const PageWrapper = ({ block, blockClassname, children }) => {
  return (
    <section className={`${block}${blockClassname || ""}`}>
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-20 pt-7 md:pt-12">
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageWrapper;
