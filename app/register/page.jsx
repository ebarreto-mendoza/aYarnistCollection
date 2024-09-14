import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export const metadata = {
    title: 'Register',
}

export default async function Register() {
    const session = await getServerSession();
    if(session) redirect("/dashboard");

    return (
    <>
    <main className="bg-dominant">
        <div className="flex justify-center pt-8 h-screen">
            <RegisterForm/>
        </div>
    </main>
    </>
    )
};