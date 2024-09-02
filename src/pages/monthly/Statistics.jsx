import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helper";
import { useRecordsContext } from "./RecordsContextProvider";
import { useRecords } from "./useRecords";

function Statistics({ type }) {
  const { timePeriod } = useRecordsContext();
  const { records, isLoading } = useRecords(timePeriod);
  if (isLoading) return <Spinner />;
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
    <div>
      <div className="grid grid-cols-2 items-center justify-center gap-y-2 text-2xl">
        <p className="text-center">💰{type} income</p>
        <p className="text-center">💳{type} outcome</p>
        <p className="text-center">
          <span className="border-b-2 border-yellow-400">
            {`+${formatCurrency(Income)}`}
          </span>
        </p>
        <p className="text-center">
          <span className="border-b-2 border-yellow-400">
            {`-${formatCurrency(Outcome)}`}
          </span>
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <p className="text-center text-2xl">♎{type} blance</p>
        <p className="text-center text-2xl">
          <span className="border-b-2 border-yellow-400">
            {formatCurrency(Balance)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Statistics;
