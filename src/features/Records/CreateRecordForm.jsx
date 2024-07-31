import { useForm } from "react-hook-form";
import { useRecordFormContext } from "./RecordFormContextProvider";

function CreateRecordForm({ children }) {
  const { register, handleSubmit } = useForm();
  const { type } = useRecordFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="min-h max-w-[450px] flex-grow overflow-y-scroll bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
      <input hidden {...register("type")} value={type} />
    </form>
  );
}

export default CreateRecordForm;
