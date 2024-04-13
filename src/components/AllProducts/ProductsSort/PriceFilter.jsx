export const PriceFilter = ({ register, onChange }) => {
  return (
    <div className="all-products__sort-price flex gap-4 items-center">
      <h5 className="font-semibold text-[20px]">Price</h5>
      <input
        className="border-divider duration-300 border-2 rounded-md p-2 w-[86px] xs:w-[110px]"
        placeholder="from"
        type="number"
        {...register("from", { onChange })}
      />
      <input
        className="border-divider duration-300 border-2 rounded-md p-2 w-[86px] xs:w-[110px]"
        placeholder="to"
        type="number"
        {...register("to", { onChange })}
      />
    </div>
  );
};
