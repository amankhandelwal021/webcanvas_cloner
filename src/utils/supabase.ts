
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// Replace these with your actual Supabase URL and anon key
const supabaseUrl = 'https://vgchytrwtrjcqlscjdkp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY2h5dHJ3dHJqY3Fsc2NqZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTc0MjYsImV4cCI6MjA1NzUzMzQyNn0.Bp6TclG9wVi21TbLdY2z-aI1uDm7nKYMExYjdowMV3c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
