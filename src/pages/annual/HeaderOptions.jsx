import { useRecordsContext } from "../monthly/RecordsContextProvider";

function HeaderOptions() {
  const style = `w-40 h-20 text-center  font-bold flex justify-center items-center`;
  const { setVisibleLine, visibleLine } = useRecordsContext();
  function handleOutcome(e) {
    e.preventDefault();
    if (!visibleLine.income && !visibleLine.balance) return;
    setVisibleLine((visibleLine) => {
      return { ...visibleLine, outcome: !visibleLine.outcome };
    });
  }
  function handleIncome(e) {
    e.preventDefault();
    if (!visibleLine.outcome && !visibleLine.balance) return;
    setVisibleLine((visibleLine) => {
      return { ...visibleLine, income: !visibleLine.income };
    });
  }
  function handleBalance(e) {
    e.preventDefault();
    if (!visibleLine.outcome && !visibleLine.income) return;
    setVisibleLine((visibleLine) => {
      return { ...visibleLine, balance: !visibleLine.balance };
    });
  }
  return (
    <div className="flex h-[5.38rem] gap-0 rounded-full border-[0.2rem] border-black text-2xl">
      <button
        className={
          style +
          ` rounded-l-full ${visibleLine.outcome ? "bg-yellow-300" : ""}`
        }
        onClick={handleOutcome}
      >
        Outcome
      </button>
      <button
        className={style + ` ${visibleLine.income ? "bg-yellow-300" : ""}`}
        onClick={handleIncome}
      >
        Income
      </button>

      <button
        className={
          style +
          ` rounded-r-full ${visibleLine.balance ? "bg-yellow-300" : ""}`
        }
        onClick={handleBalance}
      >
        Balance
      </button>
    </div>
  );
}

export default HeaderOptions;
