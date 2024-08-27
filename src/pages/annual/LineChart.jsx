import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRecords } from "../monthly/useRecords";
import { useRecordsContext } from "../monthly/RecordsContextProvider";
import Error from "../../ui/Error";

const monthlyData = {
  Jan: { income: 0, outcome: 0 },
  Feb: { income: 0, outcome: 0 },
  Mar: { income: 0, outcome: 0 },
  Apr: { income: 0, outcome: 0 },
  May: { income: 0, outcome: 0 },
  Jun: { income: 0, outcome: 0 },
  Jul: { income: 0, outcome: 0 },
  Aug: { income: 0, outcome: 0 },
  Sep: { income: 0, outcome: 0 },
  Oct: { income: 0, outcome: 0 },
  Nov: { income: 0, outcome: 0 },
  Dec: { income: 0, outcome: 0 },
};

function LineChartAnnual() {
  const { timePeriod, visibleLine } = useRecordsContext();

  const { records, isLoading } = useRecords(timePeriod);
  if (isLoading) return <div>loading...</div>;
  if (!records?.length) return <Error message="No records found" />;

  records.forEach((record) => {
    // Parse the created_at field to get the month abbreviation
    const date = new Date(record.created_at);
    const month = date.toLocaleString("en-US", { month: "short" });

    // Sum amounts by moneyType
    if (record.moneyType === "income") {
      monthlyData[month].income += record.amount;
    } else if (record.moneyType === "outcome") {
      monthlyData[month].outcome += record.amount;
    }
  });

  // Format the final data
  const data = Object.keys(monthlyData).map((month) => {
    const income = monthlyData[month].income;
    const outcome = monthlyData[month].outcome;
    const balance = income - outcome;

    return { month, income, outcome, balance };
  });

  // Print the result
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Legend />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        {visibleLine.outcome && (
          <Line type="monotone" dataKey="outcome" stroke="#339af0" />
        )}
        {visibleLine.income && (
          <Line type="monotone" dataKey="income" stroke="#fcc419" />
        )}
        {visibleLine.balance && (
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#845ef7"
            //   activeDot={{ r: 8 }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartAnnual;
