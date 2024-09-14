import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function StepOne({formData, handleChangeInput, handleNextStep, handlePrevStep}) {
    return(
    <>
    <section className="mb-6 w-96">
        <div></div>
        <div className="flex">
            <button type="button" onClick={handlePrevStep} className="p-4"><span className="h-6 w-12"><MdOutlineArrowBackIos className="text-secondary text-2xl hover:text-accent-500"/></span></button>
            <div className="flex flex-col">
                <span htmlFor="register-password" className="font-mono font-bold text-sm text-secondary mb-2">Step 1 of 2</span>
                <span htmlFor="register-password" className="font-mono font-bold text-sm text-secondary mb-2">Create a Password</span>
            </div>

        </div>
    </section>

    

    <form action="" className="flex flex-col mx-[205px]">
        <div className="pb-4">
            <div className="flex">
                <label htmlFor="register-password" className="font-mono font-bold text-sm text-secondary mb-2">Password</label>
            </div>
            <input onChange={(e) => handleChangeInput(e)} value={formData.password} id="register-password" name="password" type="password" className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none" required/>
        </div>
        
        <button type="button" onClick={handleNextStep} className="w-[325px] mt-1 py-4 rounded-3xl bg-accent-500 hover:bg-accent-600 active:bg-accent-700 focus:ring ring-accent-500 focus:outline-none text-dominant font-mono font-bold">Next</button>
    </form>
    </>
    );
}