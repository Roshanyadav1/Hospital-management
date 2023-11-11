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
     <h1> Welcome Our First page</h1>
     {/* <Link href='/data'>Go To Fetching data page</Link> */}
    </div>
  );
}
export default page;
