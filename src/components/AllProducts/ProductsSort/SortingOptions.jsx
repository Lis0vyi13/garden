export const SortingOptions = ({
  register,
  sortOptions,
  onChange,
  activeSelectValue,
}) => {
  return (
    <div className="all-products__sort-discount items-center flex gap-4">
      <h5 className="font-semibold text-[20px]">Sorted</h5>
      <select
        className="border-2 cursor-pointer border-divider p-2 rounded-md w-[175px] xs:w-[200px]"
        {...register("sortBy", { onChange })}
        value={activeSelectValue}
      >
        {sortOptions.map((option) => (
          <option
            className="text-[18px]"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
