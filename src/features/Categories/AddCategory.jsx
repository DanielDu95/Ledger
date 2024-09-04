import { IconContext } from "react-icons";
import * as Icons from "react-icons/io5";
import { CATEGORY_ICONS_ARRAY } from "../../utils/constants";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCreateCategory } from "./useCreateCategory";

function AddCategory({ close }) {
  const labelStyle = "text-xl font-semibold text-yellow-500";
  const [iconName, setIconName] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createCategory, isCreatingCategory } = useCreateCategory();

  function onSubmit(data) {
    createCategory(data, {
      onSuccess: () => {
        close();
      },
    });
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label className={labelStyle}>Category name</label>
      {errors.name && (
        <div className="text-center text-xl text-red-400">
          {`⛔${errors.name.message}`}
        </div>
      )}
      <input
        className="h-[3rem] w-[80%] rounded-lg px-4 text-xl"
        {...register("name", {
          required: "Category name is required",
        })}
      />
      <label className={labelStyle}>Category type</label>
      <select
        name="categoryType"
        className="h-[3rem] text-xl font-semibold"
        {...register("categoryType", {
          required: "Category type is required",
        })}
      >
        <option value="outcome" className="text-xl font-semibold">
          outcome
        </option>
        <option value="income" className="text-xl font-semibold">
          income
        </option>
      </select>
      <label className={labelStyle}>Category icon</label>
      {errors.icon && (
        <div className="text-center text-xl text-red-400">
          {`⛔${errors.icon.message}`}
        </div>
      )}
      <input
        className="hidden"
        {...register("icon", {
          required: "Category icon is required",
        })}
        onChange={setValue("icon", iconName)}
      />
      <IconContext.Provider
        value={{
          color: "#868e96",
          size: "20px",
        }}
      >
        <div className="h-[15rem] overflow-y-scroll px-2 py-2">
          <ul className="grid grid-cols-4 items-start justify-start gap-x-3 gap-y-7">
            {CATEGORY_ICONS_ARRAY.map((icon) => {
              const IconComponent = Icons[icon];
              return (
                <li key={icon} onClick={() => setIconName(icon)}>
                  <IconComponent
                    style={
                      iconName === icon ? { color: "rgb(250 204 21 )" } : {}
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
      <button
        disabled={isCreatingCategory}
        className="self-end rounded-lg border-2 border-yellow-400 bg-yellow-300 px-6 py-2 text-2xl font-bold hover:cursor-pointer hover:bg-yellow-400"
      >
        Add
      </button>
    </form>
  );
}

export default AddCategory;
