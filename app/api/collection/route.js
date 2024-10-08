import { connectMongoDB } from "@/lib/mongodb";
import Collection from "@/models/collection";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        console.log("In Collections")
        const {user_id, yarn_type, yarn_weight, yarn_brand, yarn_name, yarn_lot} = await req.json();
        await connectMongoDB();
        await Collection.create(
            {user_id, yarn_type, yarn_weight,
            yarn_brand, yarn_name, yarn_lot});
        return NextResponse.json(
            {message: "Collection entry added successfully."},
            {status: 201}
        ) 
    }
    catch (error) {
        return NextResponse.json(
            {message: "An error ocurred while adding entry."},
            {status: 500}
        )
    }
}

export async function GET(request){
    try {
        const searchParams = new URL (request.url)
        const result = new URLSearchParams(searchParams.searchParams)
        const user_id = result.get('user_id')

        await connectMongoDB()
        const query = await Collection.find({user_id});
        return NextResponse.json(query)

    } catch (error) {
        return NextResponse.json(
            {message: "An error occurred while retrieving collections",
            error: error.message,
            },
            {status: 500}
        )
    }

}
