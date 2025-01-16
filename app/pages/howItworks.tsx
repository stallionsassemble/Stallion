import { Button } from "@/components/UI/button"
import { howData } from "@/lib/data";

interface Section {
    name: string;
    description: string;
  }
  
  interface CardProps {
    title: string;
    sections: Section[];
  }
  

 const HowItWorksCard: React.FC<CardProps> = ({ title, sections }) => {
    return(
            <div className="border-8 max-sm:border-4 border-[#00000033] flex flex-col 2lg:w-[400px] hover:bg-[#8082F8] z-10 bg-[#D9D9D9] text-white rounded-[30px] pt-16 pb-32 max-2lg:py-12 px-6">
                <div className="text-[30px] max-sm:[text-15px] max-2lg:text-[23px]  font-[Drukwide] uppercase pb-8">{title}</div>
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-6 border-b-[1px] border-white "> 
                        <div className="text-[18px] max-sm:text-[14px] font-[700] pt-3">{section.name}</div>
                        <div className="text-[15px] max-sm:text-[12px] pb-4">{section.description}</div>
                    </div>
                ))}
            </div>
    )
}

const HowList: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-12 gap-20 max-sm:gap-12 pb-60 max-800:px-8 max-sm:pb-32">

        <div className="font-[Drukwide] font-500  uppercase text-[65px] text-[#37474F] max-sm:text-[25px]  max-2lg:text-[50px]">How It works</div>

        <div className="font-[Drukwide] flex flex-col justify-center items-center text-center lg:w-[50%] max-sm:leading-[20px] leading-[40px] tracking-wide text-[15px] max-sm:text-[10px]">
            <span>Apply for bounties, deliver your best work, and get paid in stablecoins like USDC. </span>
            <span>It’s as simple as Apply, Submit, and Get Paid.</span>
        </div>

        <div className="flex flex-col gap-40 max-sm:gap-12 max-2lg:gap-24 relative">
            <div className="flex items-center justify-center 2lg:mb-32  gap-20 flex-col">
                <span className="bg-[#D6D7FA] rounded-[25px] text-[#37474F] font-[Drukwide] text-[32px] px-72 z-10 max-sm:px-8 max-2lg:px-32 text-center py-6 max-2lg:text-[25px]  max-sm:text-[15px]">LIST BOUNTIES</span>
                <div className="border-4 transform rotate-90 border-[#00000033] w-[16%]  max-2lg:hidden"></div>
            </div>

            <div className="flex gap-12 max-2lg:flex-col ">
                {howData.map((card) => (
                    <HowItWorksCard
                    key={card.id}
                    title={card.title}
                    sections={card.sections}
                    />
                ))}
            </div>

            <div className="border-8 border-b-0 border-[#00000033] w-[70%] absolute translate-x-[20%] top-1/4  max-2lg:hidden h-56 rounded-[40px] "></div>
        </div>

        <div>
            <Button variant="stallion" className="px-20 max-sm:px-8">Join Waitlist</Button>
        </div>
    </div>
  );
};

export default HowList;
