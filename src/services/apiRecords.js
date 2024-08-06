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
