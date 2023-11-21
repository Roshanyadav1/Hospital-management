import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export const config = {
<<<<<<< HEAD
  // matcher: ['/((?!api|about|any|_next/static|_next/image|favicon.ico|$).*)',  ],
  matcher:[]
=======
  matcher: [],
  // matcher: ['/((?!api|about|any|_next/static|_next/image|favicon.ico|$).*)',  ],
>>>>>>> origin/dev_roshan
};

export default withMiddlewareAuthRequired();