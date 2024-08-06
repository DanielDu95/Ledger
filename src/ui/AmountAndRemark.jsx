import { useRecordFormContext } from "../features/Records/RecordFormContextProvider";

function AmountAndRemark() {
  const { state, dispatch } = useRecordFormContext();

  return (
    <div className="mt-32 flex flex-col items-center justify-center gap-4 p-8">
      <div className="relative">
        <input
          className="h-20 rounded-full border-2 border-yellow-500 p-2 text-center text-3xl font-bold"
          placeholder="amount"
          value={state.amount || ""}
          onChange={(e) =>
            dispatch({ type: "set_amount", payload: e.target.value })
          }
        />
        <span className="absolute right-[-15%] top-[50%] translate-y-[-50%] justify-self-center p-3 text-4xl">
          💰
        </span>
      </div>
      <div className="relative">
        <input
          className="h-20 rounded-full border-2 border-yellow-500 p-2 text-center text-3xl font-bold"
          placeholder="remark"
          maxLength={40}
          value={state.remark || ""}
          onChange={(e) =>
            dispatch({ type: "set_remark", payload: e.target.value })
          }
        />
        <span className="absolute right-[-15%] top-[50%] translate-y-[-50%] justify-self-center p-3 text-4xl">
          📒
        </span>
      </div>
    </div>
  );
}

export default AmountAndRemark;
