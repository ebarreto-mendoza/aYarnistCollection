'use client'
import { connectMongoDB } from "@/lib/mongodb"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";


const initialFormData = {
    user_id: '',
    yarn_type: '',
    yarn_weight: '',
    yarn_brand: '',
    yarn_name: '',
    yarn_lot: '',
}

export default function addCollection(){
    const [formData, setFormData] = useState(initialFormData)
    const [isLoading, setIsLoading] = useState(false);
    const {data: session} = useSession();
    const router = useRouter()

    const handleChangeInput = (event) => {
        const fieldName = event.target.name;
        let fieldValue = event.target.value;
        setFormData({
            ...formData,
            [fieldName] : fieldValue,
        });
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        const { user_id, yarn_type, yarn_weight, yarn_brand, yarn_name, yarn_lot} = formData;
        e.preventDefault();

        const user_session_id = String(session?.user?.id)
    
        try {
          setIsLoading(true)
          const res = await fetch('api/collection', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user_session_id, yarn_type, yarn_weight, yarn_brand, yarn_name, yarn_lot
            }),
          });
          setIsLoading(false)
    
          if(res.ok) {
            const form = e.target;
            form.reset();
            console.log("Collection added successfully"); 
            router.replace("/dashboard");
    
          }
          else{
              console.log("Collection adding failed");
          }
          
        } catch (error) {
          setIsLoading(false)
          console.log("error during adding collection: ", error);
        }
      }
    
    return(
        <div>
            <h1 className="">Add New Yarn to Your Collection</h1>
            <form onSubmit={handleSubmit}>
                    <fieldset className="m-4 p-2 shadow-md">
                        <legend className="p-1 bg-accent-400 font-bold text-white">General Information</legend>
                        <div className="flex flex-col pl-4">
                            <div>
                                <label htmlFor="yarn_type">Yarn Type: </label>
                                <input type="text" name="yarn_type" onChange={handleChangeInput} />
                            </div>
                            <div>
                                <label htmlFor="yarn_weight">Yarn Weight: </label>
                                <input type="text" name="yarn_weight" onChange={handleChangeInput} />
                            </div>
                            <div>
                                <label htmlFor="yarn_brand">Yarn Brand: </label>
                                <input type="text" name="yarn_brand" onChange={handleChangeInput}/>
                            </div>
                        
                            <div>
                                <label htmlFor="yarn_name">Yarn Name: </label>
                                <input type="text" name="yarn_name" onChange={handleChangeInput} />
                            </div>
                            <div>
                                <label htmlFor="yarn_lot">Yarn Lot: </label>
                                <input type="text" name="yarn_lot" onChange={handleChangeInput} />
                            </div>
                        </div>
                    </fieldset>
                <button type="submit" disabled={isLoading} >{isLoading? "Submitting" : "Submit"}</button>
            </form>
        </div>
    )
};