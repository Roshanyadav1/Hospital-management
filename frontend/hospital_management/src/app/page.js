"use client"
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <main>
      <h1>this is home</h1>
      <header className="App-header">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </header>
    </main>
  )
}

