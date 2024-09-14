'use client'
import { data } from "autoprefixer";
import { signOut, useSession } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SideNav() {
    const {data: session} = useSession();
    const router = useRouter()
    const signOutUser = () => {
        if(signOut()){
            router.replace("/")
        }
    };

    return (
        <nav className="flex flex-col justify-between w-36 bg-accent-400 text-dominant">
            <div>
            <h1>{session?.user?.name}</h1>
            </div>

            <div>
                <ul className="flex flex-col place-items-start pl-2 gap-y-2">
                    <li><Link href = "#">Profile</Link></li>
                    <li><Link href = "#">Collection</Link></li>
                    <li><Link href = "#">Projects</Link></li>
                </ul>
            </div>

            <div className="flex place-content-center m-2">
                <button onClick= {signOutUser} className=" w-32 bg-red-500">Log Out</button>
            </div>
        </nav>
    );
}