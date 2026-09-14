import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  
  // Rafraîchir le token d'authentification s'il est expiré
  const { data: { user } } = await supabase.auth.getUser();

  // Liste des adresses emails autorisées (Whitelist)
  const AUTHORIZED_EMAILS = [
    'clicprogress@gmail.com',
    'boudamohamed060@gmail.com', // <-- Ajoutez votre adresse Gmail ici
  ];

  // Protection de la route /admin
  const url = request.nextUrl.clone();
  if (url.pathname.startsWith('/admin') && !url.pathname.startsWith('/admin/login')) {
    if (!user) {
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }

    // Vérification de l'email
    if (!AUTHORIZED_EMAILS.includes(user.email ?? '')) {
      // Déconnecter l'utilisateur
      await supabase.auth.signOut();
      
      url.pathname = '/admin/login';
      url.searchParams.set('error', 'Accès refusé : cet email n\'est pas autorisé.');
      
      const redirectResponse = NextResponse.redirect(url);
      // Transférer les cookies modifiés (supprimés) vers la réponse de redirection
      supabaseResponse.cookies.getAll().forEach(cookie => {
        redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
      });
      
      return redirectResponse;
    }
  }

  // Rediriger les utilisateurs connectés hors de la page de login
  if (url.pathname === '/admin/login' && user) {
    if (AUTHORIZED_EMAILS.includes(user.email ?? '')) {
      url.pathname = '/admin';
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}
