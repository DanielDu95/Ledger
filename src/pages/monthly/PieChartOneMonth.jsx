import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import { useRecords } from "./useRecords";
import { useRecordsContext } from "./RecordsContextProvider";
import Error from "../../ui/Error";
import { formatCurrency } from "../../utils/helper";
import Spinner from "../../ui/Spinner";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderActiveShape = (props) => {
  // const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    // midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  // const sin = Math.sin(-RADIAN * midAngle);
  // const cos = Math.cos(-RADIAN * midAngle);
  // const sx = cx + (outerRadius + 10) * cos;
  // const sy = cy + (outerRadius + 10) * sin;
  // const mx = cx + (outerRadius + 30) * cos;
  // const my = cy + (outerRadius + 30) * sin;
  // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  // const ey = my;
  // const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy - 15} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {formatCurrency(value)}
      </text>
      <text x={cx} y={cy + 15} dy={8} textAnchor="middle" fill={fill}>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value}`}</text> */}
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

function PieChartOneMonth() {
  const [state, setState] = useState({
    activeIndex: 0,
  });
  const onPieEnter = (_, index) => {
    setState({
      activeIndex: index,
    });
  };
  const { timePeriod } = useRecordsContext();
  const { records, isLoading } = useRecords(timePeriod);
  if (isLoading) return <Spinner />;
  if (!records?.length) return <Error message="No records found" />;

  const categorySums = records
    .filter((record) => record.moneyType === "outcome")
    .reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category] += item.amount;
      return acc;
    }, {});
  const result = Object.keys(categorySums).map((category) => ({
    name: category.toUpperCase(),
    value: categorySums[category],
  }));

  if (!result?.length) return <Error message="No outcome in this month" />;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={state.activeIndex}
          activeShape={renderActiveShape}
          data={result}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onClick={onPieEnter}
        >
          {result.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartOneMonth;
