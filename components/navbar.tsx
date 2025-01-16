import { Button } from "@/components/UI/button"

export default function Navabr() {
    return(
        <div className="flex justify-between items-center text-[18px] px-32 font-[BebasNeue] max-sm:hidden">
            <div className="uppercase">STALLION</div>

            <div className="flex gap-4 items-center uppercase">
                <div>Home</div>
                <div>How It Works</div>
                <div>Built for you</div>
            </div>

            <Button variant="stallion" className="">Join Us</Button>
        </div>
    )
}