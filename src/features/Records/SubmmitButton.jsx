import { useAddRecord } from "./useAddRecord";

function SubmmitButton() {
  const { isPending } = useAddRecord();
  return (
    <button
      type="submit"
      className="h-20 w-60 rounded-full border-2 border-yellow-500 p-2 text-3xl font-bold"
      disabled={isPending}
    >
      Submit
    </button>
  );
}

export default SubmmitButton;
