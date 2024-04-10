const ProductsList = ({ list }) => {
  return (
    <div className="flex sale__cards-wrapper justify-center">
      <div className="sale__cards w-fit xl:w-full grid self-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {list}
      </div>
    </div>
  );
};

export default ProductsList;
