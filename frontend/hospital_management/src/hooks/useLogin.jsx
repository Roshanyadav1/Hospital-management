
// https://hospital-management-six-chi.vercel.app/api/auth0/get-auth0-user-profile/
"use client"
import { useState } from "react";

function useLogin() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser = async (access) => {
        const response = await fetch("https://hospital-management-six-chi.vercel.app/api/auth0/get-auth0-user-profile/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Authorization: "Bearer " + access,
                Authorization: `Bearer ${access}`
            }
        });
        const data = await response.json();
        setUser(data);
        setLoading(false);
    };

    return { user, loading , getUser };
}

export default useLogin;
