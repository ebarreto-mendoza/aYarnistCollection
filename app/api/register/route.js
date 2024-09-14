import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try{
        const {name, birthdate, gender, email, password} = await req.json();
        const hashPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({gender, name, birthdate, email, password: hashPassword});

        return NextResponse.json(
            {message: "User Registered."},
            {status: 201}
        ) 
    }
    catch (error) {
        return NextResponse.json(
            {message: "An error ocurred during registration."},
            {status: 500}
        )
    }
}
