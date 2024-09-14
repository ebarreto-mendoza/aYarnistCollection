'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import StepEmail from "./StepEmail";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const initialFormData = {
    email: '',
    password: '',    
    name: '',
    birthdate: '',
    gender: '',

}


export default function RegisterForm() {

    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState(initialFormData)
    const router = useRouter()

    const handleNextStep = () => {
        console.log('Step was advanced to', step)

        if (step >= 1 || step <= 4)
            setStep(step + 1)
    }

    const handlePrevStep = () => {
        console.log('Step was returned to', step)

        if (step >= 1 || step <= 4)
            setStep(step - 1)
    }

    const handleChangeInput = (event) => {
        const fieldName = event.target.name
        let fieldValue = event.target.value
        setFormData({
            ...formData,
            [fieldName] : fieldValue,
        })
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const resUserExists = await fetch('api/userExists', {
                method: 'POST',
                headers: {
                    "Content-Type": "applications/json",
                },
                body: JSON.stringify(formData)
            })

            const {user} = await resUserExists.json()

            if (user) {
                alert("A user with this email exists already. Please try again with a different email.");
                return;
            }


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
            
            {(() => {
                console.log('Step is set to', step)

                switch(step) {
                    case 0:
                        return <StepEmail formData={formData} handleNextStep={handleNextStep} handleChangeInput={handleChangeInput}/>
                    case 1:
                        return <StepOne formData={formData} handleChangeInput={handleChangeInput} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep}/>
                    case 2:
                        return <StepTwo formData={formData} handleChangeInput={handleChangeInput} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} handleSubmit={handleSubmit}/>
                    default:
                        return null
                }
            })()
            }
        </div>
    );
}