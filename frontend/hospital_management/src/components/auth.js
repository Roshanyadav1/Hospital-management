"use client"
import { useAuth0 } from "@auth0/auth0-react";

function Auth() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();


    return (
        <div className="App">

            <header className="App-header">

                {
                    isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                        :
                        <button onClick={() => loginWithRedirect()}>Log In</button>
                }
                {
                    isAuthenticated && <p> Welcome {user.email}</p>
                }
                {JSON.stringify(user, null, 2)}


            </header>
        </div>
    );
}

export default Auth;
