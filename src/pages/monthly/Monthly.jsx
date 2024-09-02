import Header from "../../ui/Header";
import HeaderCalendar from "./HeaderCalendar";
import Statistics from "./Statistics";
import RecordsTable from "./RecordsTable";
import PieChartOneMonth from "./PieChartOneMonth";
import { RecordsContextProvider } from "./RecordsContextProvider";

function Records() {
  // useEffect(function () {
  //   getRecordsByMonth({ month: 8, year: 2024 }).then((data) =>
  //     console.log(data),
  //   );
  // }, []);
  return (
    <RecordsContextProvider>
      <div className="flex h-lvh justify-center bg-cyan-100">
        <div className="flex max-w-[450px] flex-grow flex-col gap-10 overflow-y-scroll bg-white">
          <Header>
            <HeaderCalendar />
          </Header>
          <div className="flex h-[25rem] w-[100%] items-center justify-center">
            <PieChartOneMonth />
          </div>

          <Statistics type="Monthly" />
          <RecordsTable />
        </div>
      </div>
    </RecordsContextProvider>
  );
}

export default Records;
