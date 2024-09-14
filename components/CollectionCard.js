
import { connectMongoDB } from "@/lib/mongodb";
import Collection from '@/models/collection'
import Link from "next/link";
// import { useState, useEffect } from "react";
import useSWR from 'swr'

export default async function CollectionCard() {
    // const fetcher = (...args) => fetch(...args).then((res) => res.json());
    // const {data, error} = useSWR('api/collection', fetcher)
    await connectMongoDB(); 
    const data = await Collection.find();
    console.log(data)
    console.log(typeof(data[0]))

    return (
        <div className="  w-auto shadow-lg m-12">
            <h2 className=" text-3xl hover:text-accent-500 active:text-accent-700 "><Link href="#">Collection &gt;</Link></h2>
            <table className="w-auto mx-4 my-1">
                <thead>
                    <tr className="py-2 px-3">
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Lot</th>
                        <th>Type</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        data.map((row, i ) =>{
                            return (<tr>
                                <td className="px-4">{row.yarn_name}</td>
                                <td className="px-4">{row.yarn_brand}</td>
                                <td className="px-4">{row.yarn_lot}</td>
                                <td className="px-4">{row.yarn_type}</td>
                                <td className="px-4">{row.yarn_weight}</td>
                            </tr>)
                            
                        })
                    }
                </tbody>
            </table>
            <div className="flex place-content-center">
                <Link href="/addCollection" className="p-2 rounded-lg bg-accent-500 text-dominant active:bg-accent-700 focus:ring ring-accent-700 focus:outline-none"> Add to Collection</Link>
            </div>
        </div>
    );
}