import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import { PriceFilter } from "./PriceFilter";
import { DiscountFilter } from "./DiscountFilter";
import { SortingOptions } from "./SortingOptions";

import { sortOptions } from "../../../constants";

const AllProductsSort = ({ setOptions, setIsUpdating }) => {
  const { register, getValues } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.get("discount") && setIsChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };

  let timer;
  const debounceOnChange = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      onChange();
    }, 500);
  };

  return (
    <section className="all-products__sort inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0,max-content))] items-center gap-8">
      <PriceFilter register={register} onChange={debounceOnChange} />
      <DiscountFilter
        register={register}
        isChecked={isChecked}
        toggleCheckbox={toggleCheckbox}
      />
      <SortingOptions
        register={register}
        sortOptions={sortOptions}
        onChange={onChange}
      />
    </section>
  );
};

export default AllProductsSort;
