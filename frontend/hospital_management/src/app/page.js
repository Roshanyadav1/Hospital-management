'use client'
import SteperNav from "@/components/SteperNav";
import FixedContainer from "@/components/container";
import { SessionProvider } from 'next-auth/react'
import Auth from '@/components/auth';


function page({ pageProps }) {

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
