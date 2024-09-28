// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Liste des chemins valides (ajustez selon vos routes)
  const validPaths = [
    '/',
    '/webseiten',
    '/seiten',
    '/dashboard',
    '/messages',
    '/users',
    '/settings',
    '/kontakt',
    '/help',
    '/einloggen',
    '/anmelden',
    '/neu-pass',
    '/passwort',
  ];

  // Vérifiez si le chemin n'est pas valide
  if (!validPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url)); // Redirection vers la page d'accueil
  }

  return NextResponse.next();
}

// Configuration du middleware, liste des exceptions
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
