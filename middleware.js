import { clerkMiddleware } from "@clerk/nextjs/server";

const protectedRoutes = [
  /^\/dashboard/,
  /^\/account/,
  /^\/transaction/
];

const isProtectedRoute = (url) =>
  protectedRoutes.some((regex) => regex.test(url.pathname));

const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (!userId && isProtectedRoute(req.nextUrl)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }
});

export default clerk;

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};


