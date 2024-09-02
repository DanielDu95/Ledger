import Header from "../../ui/Header";
import { RecordsContextProvider } from "../monthly/RecordsContextProvider";
import RecordsTable from "../monthly/RecordsTable";
import Statistics from "../monthly/Statistics";
import HeaderOptions from "./HeaderOptions";
import LineChartAnnual from "./LineChart";
import YearSelector from "./YearSelector";

function Annual() {
  return (
    <RecordsContextProvider>
      <div className="flex h-lvh justify-center bg-cyan-100">
        <div className="flex max-w-[400px] flex-grow flex-col gap-10 overflow-y-scroll bg-white">
          <Header>
            <HeaderOptions />
          </Header>
          <div className="flex h-[400px] w-[100%] flex-col items-center justify-between gap-10">
            <YearSelector />
            <LineChartAnnual />
          </div>
          <Statistics type="Annual" />

          <RecordsTable />
        </div>
      </div>
    </RecordsContextProvider>
  );
}

export default Annual;
