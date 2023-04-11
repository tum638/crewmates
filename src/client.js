import { createClient } from "@supabase/supabase-js";

const URL = "https://vtcgqrcaedhjmtfujpln.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0Y2dxcmNhZWRoam10ZnVqcGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5OTgyODAsImV4cCI6MTk5NjU3NDI4MH0.FkN8cM4K-5mEu-SlNiKq7EtCqSZQTUCXUqQQpCEZkHE"
export const supabase = createClient(URL, API_KEY)
