import { formatCurrency } from "../../utils/helper";
import { useRecordsContext } from "./RecordsContextProvider";
import { useRecords } from "./useRecords";

function MonthlyStatistics() {
  const { selectedMonthData } = useRecordsContext();
  const { records, isLoading } = useRecords(selectedMonthData);
  if (isLoading) return <div>loading...</div>;

  const monthlyIncome = records
    .filter((record) => record.moneyType === "income")
    .reduce((acc, record) => {
      acc += record.amount;
      return acc;
    }, 0);
  // console.log(monthlyIncome);
  const monthlyOutcome = records
    .filter((record) => record.moneyType === "outcome")
    .reduce((acc, record) => {
      acc += record.amount;
      return acc;
    }, 0);
  // console.log(monthlyOutcome);
  const monthlyBalance = monthlyIncome - monthlyOutcome;
  // console.log(monthlyBalance);

  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center gap-y-4 text-3xl">
        <p className="text-center">💰Monthly income</p>
        <p className="text-center">💳Monthly outcome</p>
        <p className="text-center">{formatCurrency(monthlyIncome)}</p>
        <p className="text-center">{formatCurrency(monthlyOutcome)}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-center text-3xl">♎Monthly blance</p>
        <p className="text-center text-3xl">{formatCurrency(monthlyBalance)}</p>
      </div>
    </>
  );
}

export default MonthlyStatistics;
