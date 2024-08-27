import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRecordsContext } from "../monthly/RecordsContextProvider";
import { useEffect } from "react";

function YearSelector() {
  const { timePeriod, setTimePeriod } = useRecordsContext();
  useEffect(() => {
    setTimePeriod({ year: Number(new Date().getFullYear()) });
  }, [setTimePeriod]);

  return (
    <div className="flex items-center justify-center gap-10 p-5">
      <button
        onClick={() =>
          setTimePeriod((time) => {
            return { year: time.year - 1 };
          })
        }
        className="text-red-300"
      >
        <FaChevronLeft size="2rem" />
      </button>
      <span className="text-4xl font-bold text-red-400">{timePeriod.year}</span>
      <button
        onClick={() =>
          setTimePeriod((time) => {
            return { year: time.year + 1 };
          })
        }
        className="text-red-300"
      >
        <FaChevronRight size="2rem" />
      </button>
    </div>
  );
}

export default YearSelector;
