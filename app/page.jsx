import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title:'Login | A Yarnist Inventory', 
}

export default async function Home() {
  const session = await getServerSession(authOptions);

  if(session) redirect('/dashboard');

  return (
    <>
      <main className="bg-dominant">
        <div className="flex justify-center pt-8 h-screen">
        <LoginForm/>
        </div>
      </main>
    </>
  );
}
