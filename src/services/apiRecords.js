import supabase from "./supabase";

export async function getAllRecords() {
  const { data, error } = await supabase.from("records").select("*");
  if (error) {
    console.error("Failed to get records from database");
  }
  return data;
}

export async function addRecord(newRecord) {
  const { data, error } = await supabase
    .from("records")
    .insert([newRecord])
    .select();
  if (error) {
    console.error("Failed to add new record to database");
  }
  return data;
}

export async function getRecordsByTimePeriod(timePeriod) {
  let start;
  let end;
  if (timePeriod.month) {
    start = `${timePeriod.year}-${String(timePeriod.month).padStart(2, "0")}-01`;

    end =
      timePeriod.month === 12
        ? `${timePeriod.year + 1}-${String(1).padStart(2, "0")}-01`
        : `${timePeriod.year}-${String(timePeriod.month + 1).padStart(2, "0")}-01`;
  } else {
    start = `${timePeriod.year}-01-01`;

    end = `${timePeriod.year + 1}-01-01`;
  }

  const { data: records, error } = await supabase
    .from("records")
    .select("*")
    .filter("created_at", "gte", start)
    .filter("created_at", "lt", end);
  if (error) console.log("Failed to get records from database");
  return records;

  //  Filters
  // .eq("column", "Equal to")
  // .gt("column", "Greater than")
  // .lt("column", "Less than")
  // .gte("column", "Greater than or equal to")
  // .lte("column", "Less than or equal to")
  // .like("column", "%CaseSensitive%")
  // .ilike("column", "%CaseInsensitive%")
  // .is("column", null)
  // .in("column", ["Array", "Values"])
  // .neq("column", "Not equal to");
}

export async function deleteRecord(id) {
  const { data, error } = await supabase.from("records").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Records could not be deleted");
  }
  return data;
}
