import Card from "@/app/pages/card";
import { Button } from "@/components/UI/button";
import Link from "next/link";

export default function CardSection () {
    return(
        <div className="flex flex-col  gap-10 800:mt-40 pt-8 bg-[#C7C8FF]">
            <div className="font-[Drukwide] font-500 flex justify-center items-center  uppercase text-[60px] text-[#37474F] max-sm:text-[25px] max-lg:text-[40px]">
                ARE YOU A
            </div>

            <Card />

            <Link href="https://tally.so/r/mKvyzV" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center pb-10"><Button variant="stallion" className="px-20 max-sm:px-8">Join Waitlist</Button></div>
            </Link>
        </div>
    )
}