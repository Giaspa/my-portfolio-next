import { createClient } from "@/supabase/client";

export default async function Countries() {
  const supabase = createClient();
  const { data: countries } = await supabase.from("Experience").select();

  return <pre>{JSON.stringify(countries, null, 2)}</pre>
}