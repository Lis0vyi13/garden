export const SortingOptions = ({ register, sortOptions, onChange }) => {
  return (
    <div className="all-products__sort-discount items-center flex gap-4">
      <h5 className="font-semibold text-[20px]">Sorted</h5>
      <select
        className="border-2 cursor-pointer border-divider p-2 rounded-md w-[200px]"
        {...register("sortBy", { onChange })}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
