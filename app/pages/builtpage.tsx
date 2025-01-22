import Image from "next/image"
import { Button } from "@/components/UI/button"
import Link from "next/link"

export default function BuiltPage() {
    return(
        <div className="py-28 max-800:pb-40 800:pb-60">
            <div className="flex flex-col items-center gap-12">
                <div className="font-[Drukwide] font-500  uppercase text-[60px] text-[#37474F] max-sm:text-[25px] max-lg:text-[40px]">Built for you</div>
                <div className="font-[Drukwide] text-center lg:w-1/2 max-lg:px-12 leading-[40px] max-sm:px-8 max-sm:leading-[20px] tracking-wide text-[13px] max-sm:text-[10px]">We’re not just building a platform we’re forging a community. 
                    Stallion connects creatives to opportunities and projects 
                    on the Stellar blockchain, empowering growth and innovation. 
                    Together we’re shaping the future of Web3.
                </div>

                <Button variant="stallion" className="max-sm:px-8  800:hidden">Join Waitlist</Button>
            </div>

            <div className="relative max-800:hidden">
                <div className=" justify-around gap-32 flex items-center">
                    <Image src="/stalliuon2.png" alt="stallion2" width={400} height={600} className="max-lg:w-1/2" />
                    <Link href="https://tally.so/r/mKvyzV" target="_blank" rel="noopener noreferrer">
                        <Button variant="stallion" className="px-16 max-sm:px-8 left-[40%] absolute top-[20%] ">Join Waitlist</Button>
                    </Link>
                    <Image src="/stallion3.png" alt="stallion3" width={400} height={600} className="max-lg:w-1/2" />
                </div>

                <div className="absolute left-[45%] top-[100%] -translate-x-1/2 -translate-y-1/2 z-10 max-lg:w-1/2 ">
                    <Image src="/stallion1.png" alt="stallion1" width={400} height={600} />
                </div>
            </div>
        </div>
    )
}