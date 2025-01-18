import React from 'react';
import { cardData } from '../../lib/data';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel"
 

interface Section {
  name: string;
  description: string;
}

interface CardProps {
  tag: string;
  imageURL: string;
  sections: Section[];
  bgColor: string;
  imageColor: string;
  style?: React.CSSProperties;
}



const Card: React.FC<CardProps> = ({ tag, imageURL, sections, imageColor, bgColor, style }) => {
  return (
    <div 
      className="flex justify-between gap-4 items-center text-white rounded-[30px] w-[75%] h-[600px]"  
      style={{ 
        backgroundColor: bgColor,
        ...style
      }}
    >
      <div className=" text-center w-[10%] flex items-center ">
        <span className='transform -rotate-90 font-[Drukwide] uppercase text-[15px]'>{tag}</span>
      </div>

      <div className='p-[20px] flex flex-col w-full'>
        <div className='font-[Drukwide] text-[25px] pb-2'>Consider yourself a stallion. If You</div>
        
        <div className="">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col pb-2 border-b-[1px] border-white">
              <span className='text-[18px] font-[700] pt-4'>{section.name}</span>
              <span className='text-[15px]'>{section.description}</span> 
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-full rounded-r-[30px] w-full h-full flex justify-center items-center" style={{ backgroundColor: imageColor }}>
        <Image src={imageURL} alt={tag} width={500} height={700} />
      </div>
    </div>
  );
};

const CardList: React.FC = () => {
  return (
      <Carousel className="w-full max-w-6xl">
        <CarouselContent className='w-full'>
        {cardData.map((card, index) => (
          <CarouselItem className='flex flex-col items-center justify-center '
            key={index}>
            <Card
              tag={card.tag}
              bgColor={card.bgColor}
              imageColor={card.imageColor}
              imageURL={card.imageURL}
              sections={card.sections}
              style={{
                
              }}
            />
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
 
  );
};

export default CardList;