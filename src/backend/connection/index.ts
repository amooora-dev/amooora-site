'use server';
import { createClient } from "@supabase/supabase-js";

// const supabase = () => {
//   const supabaseUrl = process.env.SUPABASE_URL;
//   const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

//   if (!supabaseUrl || !supabaseAnonKey) {
//     throw new Error("Missing Supabase environment variables");
//   }

//   const client = createClient(supabaseUrl, supabaseAnonKey);
//   return client;
// };



const supabase = () =>  {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      'Missing Supabase server environment variables: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY'
    );
  }
  
  return createClient(supabaseUrl, supabaseServiceRoleKey);
}

export default supabase;
