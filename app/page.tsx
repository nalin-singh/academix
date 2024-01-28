"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Router } from "next/router";

export default function Home() {
    const { user, error, isLoading } = useUser();
    if (!user) {
    }
    const handleLogin = async () => {
        try {
            const response = await fetch("/api/auth/login");

            if (response.ok) {
                console.log("Login successful");
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button onClick={handleLogin}>Login</Button>
        </main>
    );
}
