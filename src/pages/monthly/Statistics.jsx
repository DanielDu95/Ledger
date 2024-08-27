import Error from "../../ui/Error";
import { formatCurrency } from "../../utils/helper";
import { useRecordsContext } from "./RecordsContextProvider";
import { useRecords } from "./useRecords";

function Statistics({ type }) {
  const { timePeriod } = useRecordsContext();
  const { records, isLoading } = useRecords(timePeriod);
  if (isLoading) return <div>loading...</div>;
  if (!records?.length) return <Error message="No records found" />;

  const Income = records
    .filter((record) => record.moneyType === "income")
    .reduce((acc, record) => {
      acc += record.amount;
      return acc;
    }, 0);
  // console.log(Income);
  const Outcome = records
    .filter((record) => record.moneyType === "outcome")
    .reduce((acc, record) => {
      acc += record.amount;
      return acc;
    }, 0);
  // console.log(Outcome);
  const Balance = Income - Outcome;
  // console.log(monthlyBalance);

  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center gap-y-4 text-3xl">
        <p className="text-center">💰{type} income</p>
        <p className="text-center">💳{type} outcome</p>
        <p className="text-center">{formatCurrency(Income)}</p>
        <p className="text-center">{formatCurrency(Outcome)}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-center text-3xl">♎{type} blance</p>
        <p className="text-center text-3xl">{formatCurrency(Balance)}</p>
      </div>
    </>
  );
}

export default Statistics;
