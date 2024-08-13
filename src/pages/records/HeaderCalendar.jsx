import { useState } from "react";
import { MonthInput, MonthPicker } from "react-lite-month-picker";
function HeaderCalendar() {
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      <div>
        <MonthInput
          selected={selectedMonthData}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
        />
        {isPickerOpen ? (
          <MonthPicker
            setIsOpen={setIsPickerOpen}
            selected={selectedMonthData}
            onChange={setSelectedMonthData}
            bgColorMonthActive="rgb(253 224 71 )"
          />
        ) : null}
      </div>
    </>
  );
}

export default HeaderCalendar;
