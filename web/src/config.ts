export const config = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY as string,
} as const;
