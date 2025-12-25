// Dependencies
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to handle maintenance mode redirects.
 * When NEXT_PUBLIC_MAINTENANCE_MODE is set to 'true', all routes except
 * /maintenance, /sitemap.xml, /robots.txt, and /studio/* will redirect to /maintenance.
 */
export function middleware(request: NextRequest) {
	const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

	// If not in maintenance mode, proceed normally
	if (!isMaintenanceMode) {
		return NextResponse.next();
	}

	const { pathname } = request.nextUrl;

	// List of paths that should be accessible during maintenance mode
	const allowedPaths = [
		'/maintenance',
		'/sitemap.xml',
		'/robots.txt',
	];

	// Check if the path is allowed
	const isAllowedPath = allowedPaths.some(path => pathname === path);
	const isStudioPath = pathname.startsWith('/studio');

	// If already on maintenance page or an allowed path, don't redirect
	if (isAllowedPath || isStudioPath) {
		return NextResponse.next();
	}

	// Redirect to maintenance page
	const maintenanceUrl = new URL('/maintenance', request.url);
	return NextResponse.redirect(maintenanceUrl);
}

/**
 * Matcher configuration to specify which paths the middleware should run on.
 * This excludes static files and Next.js internals.
 */
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, icon.jpg, apple-icon.jpg (favicon files)
		 * - opengraph-image.jpg, twitter-image.jpg (social media images)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|icon.jpg|apple-icon.jpg|opengraph-image.jpg|twitter-image.jpg).*)',
	],
};
