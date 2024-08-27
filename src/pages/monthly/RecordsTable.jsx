import { useState } from "react";
import Filter from "./Filter";
import RecordRow from "./RecordRow";
import { useRecords } from "./useRecords";
import { useRecordsContext } from "./RecordsContextProvider";
import Error from "../../ui/Error";

function RecordsTable() {
  const { timePeriod } = useRecordsContext();
  const { records, isLoading } = useRecords(timePeriod);
  const [sortBy, setSortBy] = useState("recent");
  if (isLoading) return <div>loading...</div>;
  if (!records?.length) return <Error message="No records found" />;

  let sortedRecords;
  if (sortBy === "recent")
    sortedRecords = records.toSorted((a, b) => b.created_at - a.created_at);
  else if (sortBy === "amount")
    sortedRecords = records.toSorted((a, b) => b.amount - a.amount);
  // console.log(records);
  // console.log(new Date(records[0].created_at).getDate());
  return (
    <>
      <h2 className="mt-10 flex items-center justify-between px-5 text-center text-3xl font-semibold">
        <div className="text-yellow-500">RECORDS</div>
        <Filter setSortBy={setSortBy} sortBy={sortBy} />
      </h2>
      <ul className="flex h-[24rem] flex-col items-center justify-start gap-0 overflow-y-scroll text-3xl">
        {sortedRecords.map((record) => (
          <RecordRow record={record} key={record.id} />
        ))}
      </ul>
    </>
  );
}

export default RecordsTable;
