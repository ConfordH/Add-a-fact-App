import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xckxabreuwhqvoakjgbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhja3hhYnJldXdocXZvYWtqZ2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjYyNTMsImV4cCI6MjAxNjA0MjI1M30.mqWUkZuLr6rumCjn0zKDkmyVW8BQQAMYTsuYWqmAr_A";
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase);

export default supabase;
export { supabase };
