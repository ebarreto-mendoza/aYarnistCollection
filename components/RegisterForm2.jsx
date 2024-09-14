'use client';

import Link from "next/link";
import {useState} from "react";

export default function RegisterForm2() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, email, password,
                }),
            });

            if(res.ok) {
                const form = e.target;
                form.reset();
            }
            else{
                console.log("User registration failed"); 
            }
        } catch (error) {
            console.log("error during registration: ", error);
        }
    }

    return (
        <div className="grid place-items-center h-screen">
            <h1>Create your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="name">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" autoComplete="name" required className="ring-inset ring-1 rounded-md"/>

                <label htmlFor="email" >Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" autocomplete="email" required className="ring-inset ring-1 rounded-md" />

                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="email" autocomplete="current-password" required className="ring-inset ring-1 rounded-md"/>

                <button type="submit" className="rounded-md bg-cyan-800 text-white p-2">Register</button>
                <Link href="/">Already have an account? <span className="underline">Login</span> </Link>


            </form>
        </div>
    )
}
