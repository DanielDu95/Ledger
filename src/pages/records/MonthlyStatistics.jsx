import { formatCurrency } from "../../utils/helper";
import { useRecords } from "./useRecords";

function MonthlyStatistics() {
  const { records } = useRecords();
  console.log(records);
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center gap-y-4 text-3xl">
        <p className="text-center">Monthly income</p>
        <p className="text-center">Monthly outcome</p>
        <p className="text-center">{formatCurrency(14555)}</p>
        <p className="text-center">2345</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-center text-3xl">Monthly blance</p>
        <p className="text-center text-3xl">-1234</p>
      </div>
    </>
  );
}

export default MonthlyStatistics;
