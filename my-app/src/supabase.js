import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aysduthjwcistkhjabld.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5c2R1dGhqd2Npc3RraGphYmxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwNTE5NDAsImV4cCI6MjAxNjYyNzk0MH0.HjK8317UtCAiQm0NLOS1Fuz4eroghZzD_h9Sp0_jbh0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
