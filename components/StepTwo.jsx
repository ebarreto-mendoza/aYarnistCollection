import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";


export default function StepTwo({formData, handleChangeInput, handleNextStep, handlePrevStep, handleSubmit}) {
    return(
    <>
    <section className="mb-6 w-96">
        <div></div>
        <div className="flex">
        <button type="button" onClick={handlePrevStep} className="p-4"><span className="h-6 w-12"><MdOutlineArrowBackIos className="text-secondary text-2xl hover:text-accent-500"/></span></button>
            <div className="flex flex-col">
                <span htmlFor="register-personalInfo" className="font-mono font-bold text-sm text-secondary mb-2">Step 2 of 2</span>
                <span htmlFor="register-personalInfo" className="font-mono font-bold text-sm text-secondary mb-2">Tell us about yourself</span>

            </div>

        </div>
    </section>

    

    <form action="" className="flex flex-col mx-[205px]">
        <div className="pb-4">
            <div className="flex">
                <label htmlFor="register-name" className="font-mono font-bold text-sm text-secondary mb-2">Name</label>
            </div>
            <input onChange={(e) => handleChangeInput(e)} value={formData.name} id="register-name" name="name" type="text" className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none" required/>
        </div>

        <div className="pb-4">
            <div className="flex">
                <label htmlFor="register-birthdate" className="font-mono font-bold text-sm text-secondary mb-2">Date of Birth</label>
            </div>
            <input onChange={(e) => handleChangeInput(e)} value={formData.birthdate} id="register-birthdate" name="birthdate" type="date" className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none" required/>
        </div>
        
        <div className="pb-4">
            <div className="flex">
                <label htmlFor="register-gender" className="font-mono font-bold text-sm text-secondary mb-2">Gender</label>
            </div>

            <fieldset>
                <input onChange={(e) => handleChangeInput(e)} value="man" id="register-gender_man" name="gender" type="radio" className=" " required/>
                <label htmlFor="register-gender_man">Man</label>

                <input onChange={(e) => handleChangeInput(e)} value="woman" id="register-gender_woman" name="gender" type="radio" className=" " required/>
                <label htmlFor="register-gender_woman">Woman</label>

                <input onChange={(e) => handleChangeInput(e)} value="non-binary" id="register-gender_woman" name="gender" type="radio" className=" " required/>
                <label htmlFor="register-gender_non-binary">Non-binary</label>

                <input onChange={(e) => handleChangeInput(e)} value="something-else" id="register-gender_something_else" name="gender" type="radio" className=" " required/>
                <label htmlFor="register-gender_something-else">Something Else</label>

                <input onChange={(e) => handleChangeInput(e)} value="prefer-not-to-say" id="register-gender_prefer-not-to-say" name="gender" type="radio" className=" " required/>
                <label htmlFor="register-gender_prefer-not-to-say">Prefer not to say</label>
                

            </fieldset>

            
        </div>

        <button type='submit' onClick={handleSubmit} className="w-[325px] mt-1 py-4 rounded-3xl bg-accent-500 hover:bg-accent-600 active:bg-accent-700 focus:ring ring-accent-500 focus:outline-none text-dominant font-mono font-bold">Submit</button>
    </form>
    </>
    );
}