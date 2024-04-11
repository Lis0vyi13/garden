import Categories from "../components/Categories";

const CateroriesPage = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-20 pt-7 md:pt-12">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default CateroriesPage;
