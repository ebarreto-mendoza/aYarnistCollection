'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react"


export default function CollectionCard() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const {data: session} = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/collection?' + new URLSearchParams({
                    user_id: session?.user?.id,
                }).toString(),{
                    method: 'GET'
                });
                const result = await response.json()
                setData(result)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        fetchData()
    
    }, [])

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
                        data?.map((row, i ) => {
                            return (<tr key={i}>
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