import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lbfzljuofbyivbwlckkr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZnpsanVvZmJ5aXZid2xja2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NzQ4ODgsImV4cCI6MjA1MTU1MDg4OH0.jpOzvoGchcwCsmxq-qOPJgN84YH9aD_7HF-VNOI1NAY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
