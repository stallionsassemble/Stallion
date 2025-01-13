import Image from "next/image";
import Assemblepage from './assemble';

export default function FooterPage() {
    return(
        <div className="bg-[#000000]  relative flex  flex-col h-80 py-48 items-center w-full justify-center ">
            <div className="absolute -top-64 -z-10">
                <Assemblepage />
            </div>
            <div className="flex relative text-white items-center gap-2" >
                <div className="font-[Drukwide] text-[25px]">FOLLOW US :</div>
                <Image src='./devicon_twitter.svg' alt="twitter" width={30} height={30}/>
                <Image src='./Vector.svg' alt="discord" width={30} height={30}/>
            </div>
        </div>
    )
}