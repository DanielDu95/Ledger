import Header from "../../ui/Header";
import HeaderCalendar from "./HeaderCalendar";
import MonthlyStatistics from "./MonthlyStatistics";
import RecordsTable from "./RecordsTable";
import PieChartOneMonth from "./PieChartOneMonth";
import { RecordsContextProvider } from "./RecordsContextProvider";

function Records() {
  return (
    <RecordsContextProvider>
      <div className="flex h-lvh justify-center bg-cyan-100">
        <div className="flex max-w-[450px] flex-grow flex-col gap-10 overflow-y-scroll bg-white">
          <Header>
            <HeaderCalendar />
          </Header>
          <div className="flex h-[30rem] w-[100%] items-center justify-center">
            <PieChartOneMonth />
          </div>

          <MonthlyStatistics />
          <RecordsTable />
        </div>
      </div>
    </RecordsContextProvider>
  );
}

export default Records;
