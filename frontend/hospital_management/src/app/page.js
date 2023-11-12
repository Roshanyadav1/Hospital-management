"use client"
import { useAuth0 } from "@auth0/auth0-react";
import  MiniDrawer from '@/components/sidebar'
//import disease_form from "@/components/disease_form";
export default function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
     <div>
    <MiniDrawer/>
        </div>
   {/* <main>
      <h1>this is home</h1>
      <header className="App-header">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </header>
    </main> */}
  {/* <disease_form/> */}
    </>
  )
}

// function page() {

//   return (
//     <div>
//       <SteperNav />
//       <FixedContainer />
//     </div>
//   );
// }
// export default page;
