import Link from "next/link";

export default function StepEmail({formData, handleNextStep, handleChangeInput}) {
    return(
    <>
    <section className="mb-6 w-96">
        <h1 className="font-mono font-bold text-4xl text-left text-secondary">Sign up to start tracking</h1>
    </section>

    

    <form action="" className="flex flex-col mx-[205px]">
        <div className="pb-4">
            <div className="flex">
                <label htmlFor="register-email" className="font-mono font-bold text-sm text-secondary mb-2">Email Address</label>
            </div>
            <input onChange={(e) => handleChangeInput(e)} value={formData.email} id="register-email" name="email" type="email" className=" w-[325px] px-4 py-2 border border-secondary text-secondary hover:border-accent-500 focus:border-accent-500 focus:outline-none" required/>
        </div>
        
        <button type="button" onClick={handleNextStep} className="w-[325px] mt-1 py-4 rounded-3xl bg-accent-500 hover:bg-accent-600 active:bg-accent-700 focus:ring ring-accent-500 focus:outline-none text-dominant font-mono font-bold">Next</button>
    </form>

    <hr className=" w-[535px] mx-[100px] my-8 border-secondary"/>
    <div className="font-mono text-sm">
        <span className="mr-2 text-secondary">Already have an account?</span>
        <span><Link href="/" className="text-accent-500 hover:text-accent-600 active:text-accent-700 focus:outline-none focus:ring focus:ring-accent-600 underline">Log in here</Link></span>
    </div>
    </>
    );
}