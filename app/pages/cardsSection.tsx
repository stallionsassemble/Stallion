import Card from "@/app/pages/card";
import { Button } from "@/components/UI/button";

export default function CardSection () {
    return(
        <div className="flex flex-col justify-center items-center  gap-10 mt-40 pt-8 bg-[#C7C8FF]  ">
            <div className="font-[Drukwide] font-500 flex justify-center items-center  uppercase text-[60px] text-[#37474F] max-sm:text-[25px] max-lg:text-[40px]">
                ARE YOU A
            </div>
            
            <Card />

            <div className="flex justify-center pb-10"><Button variant="stallion" className="px-20 max-sm:px-8">Join Waitlist</Button></div>
        </div>
    )
}