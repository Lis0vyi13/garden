import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import InputMask from "@mona-health/react-input-mask";

import Modal from "../Modal";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

import { discountFormInputs } from "../../constants";

const DiscountForm = () => {
  const { handleSubmit, control, reset } = useForm({ mode: "onChange" });

  const [isModalActive, setisModalActive] = useState(false);

  const onSubmit = (data) => {
    if (data) {
      setisModalActive(true);
      reset();
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        {discountFormInputs.map((item) => (
          <Controller
            key={item.name}
            control={control}
            name={item.name}
            rules={{
              ...(item.type === "number"
                ? {
                    pattern: {
                      value: /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/,
                      message:
                        "Invalid phone number format. Example: +38 (123) 456 78 90",
                    },
                    required:
                      "Invalid phone number format. Example: +38 (123) 456 78 90",
                  }
                : { required: "Input is required!" }),
            }}
            defaultValue=""
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                {item.type === "number" ? (
                  <InputMask
                    className="bg-transparent font-bold placeholder:text-[18px] placeholder:text-bold px-4 py-2 text-[18px] placeholder-white text-white border outline-none rounded-md border-white w-full"
                    mask={"+38\\ (999) 999 99 99"}
                    type={"text"}
                    value={value}
                    placeholder="+38 (___) ___ __ __"
                    onChange={onChange}
                  />
                ) : (
                  <Input {...item} value={value} onChange={onChange} />
                )}

                {error?.message && (
                  <span className="text-red drop-shadow-none font-bold">
                    {error.message}
                  </span>
                )}
              </>
            )}
          />
        ))}
        <Button
          text="Get a discount"
          extraClassName="bg-white text-black mt-3 hover:bg-gray py-3"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.form>
      {createPortal(
        <Modal
          isActive={isModalActive}
          setIsActive={setisModalActive}
          type="successDiscount"
        />,
        document.body,
      )}
    </>
  );
};

export default DiscountForm;
