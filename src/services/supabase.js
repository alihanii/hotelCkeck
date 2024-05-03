import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kgnvkpdgaewkljbcuhie.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbnZrcGRnYWV3a2xqYmN1aGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2OTUwNTIsImV4cCI6MjAyOTI3MTA1Mn0.FQGsKeJQpRrTTYNSxf3KZQZ1iBOmq7c-rwRhbuDLWrg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
