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

export async function getRecordByMonth() {
  const { data: records, error } = await supabase.from("records").select("*");
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
