import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import { PriceFilter } from "./PriceFilter";
import { DiscountFilter } from "./DiscountFilter";
import { SortingOptions } from "./SortingOptions";
import { CategoryFilter } from "./CategoryFilter";

import debounce from "../../../utils/debounce";

import { sortOptions } from "../../../constants";
import { categoriesList } from "../../../constants";

const AllProductsSort = ({ setOptions, setIsUpdating, className }) => {
  const { register, getValues, setValue } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("By default");
  const [categoryValue, setCategoryValue] = useState("All products");

  const navigate = useNavigate();
  const location = useLocation();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.get("discount") === "true"
      ? setIsChecked(true)
      : setIsChecked(false);
    setValue("from", params.get("from"));
    setValue("to", params.get("to"));
    setValue("discount", params.get("discount") || false);
    setValue("sortBy", params.get("sortBy"));
    setSelectValue(params.get("sortBy"));
    setCategoryValue(params.get("category"));
    setValue("category", params.get("category"));
    onChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, setValue]);

  const onChange = () => {
    setIsUpdating(true);
    try {
      const data = getValues();
      const params = new URLSearchParams();

      params.set("from", data.from || "");
      params.set("to", data.to || "");
      params.set("discount", data.discount || "");
      params.set("sortBy", data.sortBy || "");
      params.set("category", data.category || "");

      navigate({ pathname: location.pathname, search: params.toString() });

      const filteredData = Object.keys(data)
        .filter((key) => data[key] != false || key === "discount")
        .reduce((obj, key) => {
          obj[key] = data[key];
          return obj;
        }, {});

      filteredData.from = +filteredData.from || 0;
      filteredData.to = +filteredData.to || 500;
      setOptions((prevData) => ({ ...prevData, ...filteredData }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
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

export default AllProductsSort;
