import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import { PriceFilter } from "./PriceFilter";
import { DiscountFilter } from "./DiscountFilter";
import { SortingOptions } from "./SortingOptions";

import debounce from "../../../utils/debounce";

import { sortOptions } from "../../../constants";

const AllProductsSort = ({ setOptions, setIsUpdating }) => {
  const { register, getValues, setValue } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("By default");
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
    <section className="all-products__sort inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0,max-content))] items-center gap-8">
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
    </section>
  );
};

export default AllProductsSort;
