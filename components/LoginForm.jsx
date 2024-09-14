'use client'
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Everything works fine")
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if(res.error){
                alert("Invalid Credentials");
                return;
            }

            console.log("Time to redirect");
            router.replace("dashboard");

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    return(
        <div id="login-container" className="flex flex-col place-items-center w-[735px] pt-8 rounded-lg bg-dominant">
            <h1 className="font-mono font-bold text-4xl text-center my-6 text-secondary">Log in to A Yarnist Inventory</h1>
            <hr className=" w-[535px] mx-[100px] my-8 border-secondary"/>

            <form  onSubmit={handleSubmit} className="flex flex-col mx-[205px]">
                <div className="pb-4">
                    <div className="flex">
                        <label htmlFor="login-email" className="font-mono font-bold text-sm text-secondary mb-2">Email Address</label>
                    </div>
                    <input onChange={(e) => {setEmail(e.target.value)}} id="login-email" name="email" type="email" className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none" required/>
                </div>

                
                <div className="pb-4">
                    <div className="flex justify-between">
                        <label htmlFor="login-password" className="font-mono font-bold text-sm text-secondary pb-2">Password</label>
                        <span ><Link href="#" className="font-mono text-sm text-accent-500 hover:text-accent-600 active:text-accent-700 focus:outline-none focus:ring focus:ring-accent-600">Forgot Password?</Link></span>
                    </div>
                    <input onChange={(e) => {setPassword(e.target.value)}} id="login-password" name="password" type="password" className="w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none" required />
                </div>
                
                <button className="w-[325px] mt-8 py-4 rounded-3xl bg-accent-500 hover:bg-accent-600 active:bg-accent-700 focus:ring ring-accent-500 focus:outline-none text-dominant font-mono font-bold">Log In</button>
            </form>
            
            <hr className=" w-[535px] mx-[100px] my-8 border-secondary"/>
            <div className="font-mono text-sm">
                <span className="mr-2 text-secondary">Don't have an account?</span>
                <span><Link href="/register" className="text-accent-500 hover:text-accent-600 active:text-accent-700 focus:outline-none focus:ring focus:ring-accent-600 underline">Create Account</Link></span>
            </div>

        </div>
    );
}