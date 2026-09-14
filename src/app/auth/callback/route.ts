import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // si un 'next' parameter est présent, on l'utilise comme redirect URL après la connexion
  const next = searchParams.get('next') ?? '/admin'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host') 
      const isLocalEnv = process.env.NODE_ENV === 'development'
      if (isLocalEnv) {
        // En développement, on redirige vers origin
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        // En production on utilise x-forwarded-host
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  // retourne une erreur en cas d'échec
  return NextResponse.redirect(`${origin}/admin/login?error=Échec de l'authentification`)
}
