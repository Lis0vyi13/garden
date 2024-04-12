export const DiscountFilter = ({ register, isChecked, toggleCheckbox }) => {
  return (
    <div className="all-products__sort-discount flex w-fit items-center">
      <label
        htmlFor="discount"
        className="flex gap-4 items-center cursor-pointer"
        tabIndex={0}
      >
        <h5 className="font-semibold text-[20px] select-none">
          Discounted items
        </h5>
        <input
          id="discount"
          className="hidden"
          type="checkbox"
          checked={isChecked}
          {...register("discount", { onChange: toggleCheckbox })}
        />
        <div
          className={`w-8 h-8 border-2 border-divider rounded-md flex items-center justify-center mr-2 transition-all duration-300`}
        >
          {isChecked && (
            <svg
              className="min-w-8 h-8 pointer-events-none bg-green rounded-md"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>
    </div>
  );
};
