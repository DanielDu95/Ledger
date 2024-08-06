import { useRecordFormContext } from "./RecordFormContextProvider";

function HeaderButtons() {
  const { state, dispatch } = useRecordFormContext();
  const style = `w-40 h-20 text-center hover:bg-yellow-300  font-bold flex justify-center items-center`;
  function handleOutcome(e) {
    e.preventDefault();
    dispatch({ type: "set_moneyType", payload: "outcome" });
  }
  function handleIncome(e) {
    e.preventDefault();
    dispatch({ type: "set_moneyType", payload: "income" });
  }
  return (
    <>
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
    </>
  );
}

export default HeaderButtons;
