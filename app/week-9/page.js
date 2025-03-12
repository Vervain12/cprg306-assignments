"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const handleSignIn = async () => {
        await gitHubSignIn();
    }

    const handleSignOut = async () => {
        await firebaseSignOut();
    }

    return (
        <main className="text-pink-500 m-4 flex-1 text-center">
            {!user ? (
            <button
                onClick={handleSignIn}
                className="border border-2 p-2 text-2xl border-pink-300">Sign In</button> 
            ) : (
                <div>
                    <p className="p-2 text-2xl">
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <div className="flex flex-row flex-1 gap-2 align-middle justify-center">
                        <button
                            onClick={handleSignOut}
                            className="border border-2 p-2 text-xl border-pink-400">Sign Out</button>
                        <Link
                            href={"week-9/shopping-list"}
                            className="border border-2 p-2 text-xl border-pink-400 inline-block no-underline">Shopping List</Link>    
                    </div>
                </div>
            )}
        </main>
    )
}