import { useRecordFormContext } from "./RecordFormContextProvider";

function HeaderButtons() {
  const { state, dispatch } = useRecordFormContext();
  const style = `w-[9rem] h-20 text-center hover:bg-yellow-300  font-bold flex justify-center items-center`;
  function handleOutcome(e) {
    e.preventDefault();
    dispatch({ type: "set_moneyType", payload: "outcome" });
  }
  function handleIncome(e) {
    e.preventDefault();
    dispatch({ type: "set_moneyType", payload: "income" });
  }
  return (
    <div className="flex h-[5.38rem] gap-0 rounded-full border-[0.2rem] border-black text-2xl">
      <button
        className={
          style +
          ` rounded-l-full ${state.moneyType === "outcome" ? "bg-yellow-300" : ""}`
        }
        onClick={handleOutcome}
      >
        Outcome
      </button>

      <button
        className={
          style +
          ` rounded-r-full ${state.moneyType === "income" ? "bg-yellow-300" : ""}`
        }
        onClick={handleIncome}
      >
        Income
      </button>
    </div>
  );
}

export default HeaderButtons;
