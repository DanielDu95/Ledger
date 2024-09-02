import { useForm } from "react-hook-form";
import { useRecordFormContext } from "./RecordFormContextProvider";
import Error from "../../ui/Error";
import { useAddRecord } from "./useAddRecord";

function CreateRecordForm({ children }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { state, dispatch } = useRecordFormContext();
  const { addRecord } = useAddRecord();

  function onSubmit(data) {
    addRecord(data);
    dispatch({ type: "set_amount", payload: "" });
    dispatch({ type: "set_remark", payload: "" });
  }
  return (
    <form
      className="relative flex max-w-[450px] flex-col overflow-y-scroll bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
      {(errors?.amount || errors?.category) && (
        <Error message="⛔Category or amount missing" />
      )}
      <input
        hidden
        defaultValue={state.moneyType}
        {...register("moneyType", {
          required: "What type of money do you want to record",
        })}
        onChange={setValue("moneyType", state.moneyType)}
      />
      <input
        hidden
        {...register("category", {
          required: "Please choose one category",
        })}
        onChange={setValue("category", state.category)}
      />
      <input
        hidden
        {...register("amount", {
          required: "Please enter the amount",
        })}
        onChange={setValue("amount", state.amount)}
      />
      <input
        hidden
        {...register("remark")}
        onChange={setValue("remark", state.remark)}
      />
    </form>
  );
}

export default CreateRecordForm;
