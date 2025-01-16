// import Image from "next/image";

export default function Page() {
    return (
      <div className="relative flex lg:p-40 max-sm:pb-20 w-screen items-center overflow-hidden">
        <div className="relative flex max-w-[100vw]">
          <div className="flex w-max animate-marquee whitespace-nowrap [--duration:12s] hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="px-8">
                <div className="font-[Drukwide] flex  items-center font-bold text-[#0000004D] text-[110px] max-sm:text-[50px]">
                   <span className="">ASSEMBLE STALLIONS</span>
                   {/* <Image src="/mush.svg" alt="stallion1" className="pr-28 max-sm:pr-14" width={500} height={500} /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }