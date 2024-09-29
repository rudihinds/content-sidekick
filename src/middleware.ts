// Comment out or remove Clerk-related imports and the entire middleware function
// import { authMiddleware } from "@clerk/nextjs";
 
// export default authMiddleware({
//   // ...configuration
// });
 
// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

// Temporary placeholder middleware
export function middleware() {}

export const config = {
  matcher: [],
};
