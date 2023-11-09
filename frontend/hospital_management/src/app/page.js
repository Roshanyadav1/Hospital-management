'use client'
import SteperNav from "@/components/SteperNav";
import FixedContainer from "@/components/container";
import { SessionProvider } from 'next-auth/react'
import Auth from '@/components/auth';

// export default function App () {
//   return (
//       <Component {...pageProps} />
//         this is working
//     </SessionProvider>
//   )
// }
function page({ pageProps }) {

  // console.log("ENV FILES" , process.env)

  return (
    <div>
      <SessionProvider session={pageProps?.session}>
      <SteperNav />
      <FixedContainer />
      <Auth />

    </SessionProvider>
    </div>
  );
}
export default page;
