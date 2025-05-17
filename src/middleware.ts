import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// const validPaths = " /book,/meenkulathiamman";
// const excludedSubdomains = "www, staging, dev, temples, bookmypuja, localhost";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") || "";
  const subdomain = host.split(".")[0];
  // const path = url.pathname;

  //   if (subdomain && !excludedSubdomains.includes(subdomain) && validPaths.includes(path)) {
  //     url.pathname = `/${subdomain}${path}`; // For now, we are removing the /temple/ prefix
  //     return NextResponse.rewrite(url);
  //   }

  //   return NextResponse.next();


    url.pathname = `/${subdomain}`; // For now, we are removing the /temple/ prefix
    return NextResponse.rewrite(url);

}
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
