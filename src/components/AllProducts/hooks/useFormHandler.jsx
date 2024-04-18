import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

export const useFormHandler = ({ setOptions, setIsUpdating }) => {
  const { register, getValues, setValue } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("By default");
  const [categoryValue, setCategoryValue] = useState("All products");

  const navigate = useNavigate();
  const location = useLocation();

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
      setTimeout(() => {
        setIsUpdating(false);
      }, 100);
    }
  };

  return {
    register,
    isChecked,
    selectValue,
    categoryValue,
    setIsChecked,
    onChange: onChange,
  };
};
