import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectMongoDB();
        console.log("In userExists");
        const {email} = await req.json();
        console.log(email)
        const user = await User.findOne({email}).select("_id");
        console.log("user: ", user)
        return NextResponse.json({user});
    } catch (error) {
        console.log(error)
    }
}