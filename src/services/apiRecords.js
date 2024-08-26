import supabase from "./supabase";

export async function getRecords() {
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

export async function getRecordsByMonth({ month, year }) {
  const yearMonthStart = `${year}-${String(month).padStart(2, "0")}-01`;

  const yearMonthEnd =
    month === 12
      ? `${year + 1}-${String(1).padStart(2, "0")}-01`
      : `${year}-${String(month + 1).padStart(2, "0")}-01`;

  console.log(yearMonthStart, yearMonthEnd);

  const { data: records, error } = await supabase
    .from("records")
    .select("*")
    .filter("created_at", "gte", yearMonthStart)
    .filter("created_at", "lt", yearMonthEnd);
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
