import { memo } from "react";

import { useFormHandler } from "../hooks/useFormHandler";

import { PriceFilter } from "./PriceFilter";
import { DiscountFilter } from "./DiscountFilter";
import { SortingOptions } from "./SortingOptions";
import { CategoryFilter } from "./CategoryFilter";

import { sortOptions } from "../../../constants";
import { categoriesList } from "../../../constants";

import debounce from "../../../utils/debounce";

const AllProductsSortInitial = ({ setOptions, setIsUpdating, className }) => {
  const {
    register,
    onChange,
    isChecked,
    selectValue,
    categoryValue,
    setIsChecked,
  } = useFormHandler({ setOptions, setIsUpdating });

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  return (
    <section
      className={`all-products__sort inline-grid w-[260px] xs:w-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0,max-content))] items-center gap-8 ${className}`}
    >
      <PriceFilter register={register} onChange={debounce(onChange)} />
      <DiscountFilter
        register={register}
        isChecked={isChecked}
        toggleCheckbox={toggleCheckbox}
      />
      <SortingOptions
        register={register}
        sortOptions={sortOptions}
        onChange={onChange}
        activeSelectValue={selectValue}
      />
      <CategoryFilter
        register={register}
        categoriesOptions={categoriesList}
        onChange={onChange}
        categoryValue={categoryValue}
      />
    </section>
  );
};

const AllProductsSort = memo(AllProductsSortInitial);
export default AllProductsSort;
