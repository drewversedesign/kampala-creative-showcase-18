// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ubfqbbgymcpaapdtdrds.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZnFiYmd5bWNwYWFwZHRkcmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MTQ1NjksImV4cCI6MjA2MDQ5MDU2OX0.naV7cjEjiOTNiiu7Ll0adXWvwk3bWsVuLCsnxhunSxI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);