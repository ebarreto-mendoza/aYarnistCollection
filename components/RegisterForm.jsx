'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const initialFormData = {
    email: '',
    password: '',    
    name: '',
    birthdate: '',
    gender: '',

}


export default function RegisterForm() {
    //Sets all form data to begin as empty
    const [formData, setFormData] = useState(initialFormData)
    const router = useRouter();

    //upon change of input, form data gets updated
    const handleChangeInput = (event) => {
        const fieldName = event.target.name
        let fieldValue = event.target.value
        setFormData({
            ...formData,
            [fieldName] : fieldValue,
        })
        console.log(formData)
    }

    //Upon submit, api endpoint is called to store data in database
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            //checks to see if user already exists in database
            const resUserExists = await fetch('api/userExists', {
                method: 'POST',
                headers: {
                    "Content-Type": "applications/json",
                },
                body: JSON.stringify(formData)
            })

            const {user} = await resUserExists.json()

            //If user already exists, then do not create duplicate user
            if (user) {
                alert("A user with this email exists already. Please try again with a different email.");
                return;
            }

            //Else go ahead and create new user
            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if(res.ok) {
                console.log("User registration success"); 
                setFormData(initialFormData)
                console.log(formData)
                router.replace('/')
            }
            else{
                console.log("User registration failed"); 
            }
        } catch (error) {
            console.log("error during registration: ", error);
        }
    }


    return(
        <div id="register-container" className="flex flex-col place-items-center w-[735px] pt-8 rounded-lg bg-dominant">
            <h1 className="font-mono font-bold text-lg text-secondary mb-4">Create your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="name" className="font-mono font-bold text-sm text-secondary mb-2">Full Name</label>
                <input onChange={(e) => handleChangeInput(e)} value={formData.name} type="text" name="name" autoComplete="name" required className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none"/>

                <label htmlFor="email" className="font-mono font-bold text-sm text-secondary mb-2">Email address</label>
                <input onChange={(e) => handleChangeInput(e)} value={formData.email} type="email" name="email" autoComplete="email" required className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none" />

                <label htmlFor="password" className="font-mono font-bold text-sm text-secondary mb-2">Password</label>
                <input onChange={(e) => handleChangeInput(e)} value={formData.password} type="password" name="password" autoComplete="current-password" required className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none"/>

                <label htmlFor="birthdate" className="font-mono font-bold text-sm text-secondary mb-2">Date of Birth</label>
                <input onChange={(e) => handleChangeInput(e)} value={formData.birthdate} type="date" name="birthdate" required className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none"/>
                
                <label htmlFor="gender" className="font-mono font-bold text-sm text-secondary mb-2">Gender</label>
                {/* <input onChange={(e) => handleChangeInput(e)} value={formData.gender} type="text" name="gender" required className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none"/> */}
                <fieldset>
                    <input onChange={(e) => handleChangeInput(e)} value="man" id="gender_man" name="gender" type="radio" className=" " required/>
                    <label htmlFor="gender_man">Man</label>

                    <input onChange={(e) => handleChangeInput(e)} value="woman" id="gender_woman" name="gender" type="radio" className=" " required/>
                    <label htmlFor="gender_woman">Woman</label>

                    <input onChange={(e) => handleChangeInput(e)} value="non-binary" id="gender_non-binary" name="gender" type="radio" className=" " required/>
                    <label htmlFor="gender_non-binary">Non-binary</label>

                    <input onChange={(e) => handleChangeInput(e)} value="something-else" id="gender_something_else" name="gender" type="radio" className=" " required/>
                    <label htmlFor="gender_something-else">Something Else</label>

                    <input onChange={(e) => handleChangeInput(e)} value="prefer-not-to-say" id="gender_prefer-not-to-say" name="gender" type="radio" className=" " required/>
                    <label htmlFor="gender_prefer-not-to-say">Prefer not to say</label>
                </fieldset>

                <button type="submit" className="w-[325px] mt-1 py-4 rounded-3xl bg-accent-500 hover:bg-accent-600 active:bg-accent-700 focus:ring ring-accent-500 focus:outline-none text-dominant font-mono font-bold">Register</button>
                <div className="font-mono text-sm">
                    <span className="mr-2 text-secondary">Already have an account?</span>
                    <span><Link href="/" className="text-accent-500 hover:text-accent-600 active:text-accent-700 focus:outline-none focus:ring focus:ring-accent-600 underline">Log in here</Link></span>
                </div>
            </form>
        </div>
    );
}