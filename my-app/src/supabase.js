import { createClient } from "@supabase/supabase-js";

//IMPORTANT NOTE: it is bad practice to include the supabaseUrl/anonKey in the code, 
//but for the sake of simplicity, I have included them here to prevent any authentication errors.
//In a real application, you would want to hide these keys in a .env file, and then import them from there.

const supabaseUrl = "https://aysduthjwcistkhjabld.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5c2R1dGhqd2Npc3RraGphYmxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwNTE5NDAsImV4cCI6MjAxNjYyNzk0MH0.HjK8317UtCAiQm0NLOS1Fuz4eroghZzD_h9Sp0_jbh0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
