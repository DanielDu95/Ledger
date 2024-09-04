import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error("Fail to get categories from database");
  }
  return data;
}

export async function createCategory(newCategory) {
  const { data, error } = await supabase
    .from("categories")
    .insert([newCategory])
    .select();
  if (error) {
    console.error("Fail to add category to database");
  }
  return data;
}
