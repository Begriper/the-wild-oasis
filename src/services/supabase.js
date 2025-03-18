import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sxqkcppjmowrngnmqtjw.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWtjcHBqbW93cm5nbm1xdGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTU1MTcsImV4cCI6MjA1Njc3MTUxN30.JavBIfyrgTcMXbOxl2EyiRSbT2TLXk3-GpXsTJvV1lA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
