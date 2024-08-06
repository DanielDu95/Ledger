import { createClient } from "@supabase/supabase-js";

const VITE_SUPABASE_URL = "https://codyatetcixwrozoeiur.supabase.co";
const VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZHlhdGV0Y2l4d3Jvem9laXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzEzNDAsImV4cCI6MjAzODE0NzM0MH0.461QBmYCvXGGZ5oBpzBTaQagDnn_p21WIFIaLMHx1xQ";

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

export default supabase;
