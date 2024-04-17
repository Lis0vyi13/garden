export const CategoryFilter = ({
  register,
  onChange,
  categoryValue,
  categoriesOptions,
}) => {
  return (
    <div className="all-products__sort-category-filter items-center flex gap-4">
      <h5 className="font-semibold text-[20px]">Category</h5>
      <select
        className="border-2 cursor-pointer border-divider p-2 rounded-md w-[150px] xs:w-[200px]"
        {...register("category", { onChange })}
        value={categoryValue || ""}
      >
        <option className="text-[18px]" value="All products">
          All products
        </option>
        {categoriesOptions.map((option) => (
          <option
            className="text-[18px]"
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
