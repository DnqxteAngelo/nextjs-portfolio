import { createServerClient, type CookieOptions } from "@supabase/ssr";

export const createClient = (headers: Headers) => { // Accept headers as parameter
  const cookieStore = headers ? headers.get('cookie') : null; // Retrieve cookies from headers

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore?.split('; ').find(row => row.startsWith(`${name}=`))?.split('=')[1]; // Extract cookie value
        },
        set(name: string, value: string, options: CookieOptions) {
          // Implement setting cookies on the response headers if needed
        },
        remove(name: string, options: CookieOptions) {
          // Implement removing cookies from the response headers if needed
        },
      },
    },
  );
};
