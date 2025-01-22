import { Button } from "@/components/UI/button"
import NavbarPage from "@/components/NavabarPage"
import Link from "next/link"

export default function HeroPage () {
    return(
        <main className="bg-[url('/hero-Image.png')]  bg-auto bg-no-repeat bg-cover h-screen w-full flex flex-col items-center justify-center">
            <NavbarPage/>
            <div className="flex flex-col items-center justify-center gap-4 max-sm:gap-8 h-full text-center">
                <div className="font-[Drukwide] text-[#37474F] text-[90px]  font-[900] px-20 max-sm:px-2 max-lg:px-10 max-sm:text-[25px] max-lg:text-[50px] max-2lg:text-[70px] max-1lg:text-[60px] max-800:text-[40px]">STALLION’S REALM</div>

                <div className="font-[Drukwide] leading-[40px] tracking-wide flex flex-col  text-center text-[13px] font-[400] pb-6 w-[70%] max-sm:w-full max-sm:text-[10px] max-sm:px-8 max-sm:leading-[20px]  max-lg:leading-[30px]">
                    <p>We connect innovators, builders, and visionaries across emerging regions to transformative Web3 opportunities.</p> 
                    <p>Join a global cooperative driving financial inclusion and blockchain innovation on the Stellar network. 
                    Your journey starts here—build, launch, and thrive with Stallion.</p>
                </div>
                
                <Link href="https://tally.so/r/mKvyzV" target="_blank" rel="noopener noreferrer">
                    <Button variant="stallion" className="px-16 max-sm:px-8">Join Waitlist</Button>
                </Link>
            </div>
        </main>
    )
}