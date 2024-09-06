import { useState } from "react";
// import { MonthInput, MonthPicker } from "react-lite-month-picker";
import { MonthInput } from "../../features/monthPick/MonthInput/MonthInput";
import { MonthPicker } from "../../features/monthPick/MonthPicker/MonthPicker";
import { useRecordsContext } from "./RecordsContextProvider";
function HeaderCalendar() {
  const { timePeriod, setTimePeriod } = useRecordsContext();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  // const queryClient = useQueryClient();
  // queryClient.prefetchInfiniteQuery();

  // console.log(Date.parse("08/06/2024"));

  return (
    <>
      <div>
        <MonthInput
          selected={timePeriod}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
        />
        {isPickerOpen ? (
          <MonthPicker
            setIsOpen={setIsPickerOpen}
            selected={timePeriod}
            onChange={setTimePeriod}
            bgColorMonthActive="rgb(253 224 71 )"
          />
        ) : null}
      </div>
    </>
  );
}

export default HeaderCalendar;
