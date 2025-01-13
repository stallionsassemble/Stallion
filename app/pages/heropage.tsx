import Navbar from "@/components/navbar"
import { Button } from "@/components/UI/button"

export default function HeroPage () {
    return(
        <main className="bg-[url('/hero-Image.png')] pt-12 bg-auto bg-no-repeat bg-cover lg:h-screen w-full mx-auto">
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-4 h-full text-center">
                <div className="font-[Drukwide] text-[#37474F] text-[90px]  font-[900] px-20 max-sm:text-[30px]">STALLION’S REALM</div>

                <div className="font-[Drukwide] leading-[40px] tracking-wide flex flex-col  text-center text-[13px] font-[400] pb-6 w-[70%]">
                    <p>We connect innovators, builders, and visionaries across emerging regions to transformative Web3 opportunities.</p> 
                    <p>Join a global cooperative driving financial inclusion and blockchain innovation on the Stellar network. 
                    Your journey starts here—build, launch, and thrive with Stallion.</p>
                </div>

                <Button variant="stallion" className="px-16">Join Waitlist</Button>
            </div>
        </main>
    )
}