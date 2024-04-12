import ProductsCardItem from "./ProductsCardItem";

const ProductsList = ({ list }) => {
  const newList = list.map((prod) => {
    return <ProductsCardItem key={prod.name} {...prod} />;
  });
  return (
    <div className="flex sale__cards-wrapper justify-center">
      <div
        className={`sale__cards w-fit xl:w-full grid self-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 ${
          newList.length > 0 ? "justify-items-center" : ""
        } `}
      >
        {newList.length > 0 ? (
          newList
        ) : (
          <span className="text-left">No matching products</span>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
