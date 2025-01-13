import React from 'react';
import { cardData } from '../../lib/data';
import Image from 'next/image';

interface Section {
  name: string;
  description: string;
}

interface CardProps {
  tag: string;
  imageURL: string;
  sections: Section[];
}

const Card: React.FC<CardProps> = ({ tag, imageURL, sections }) => {
  return (
    <div className="flex justify-between items-center bg-[#80C8F8] rounded-[30px] w-[70%] h-[90%]">
      <div className="card-tag">{tag}</div>

      <div className='p-[20px] '>
        <div className=''>Consider yourself a stallion. If You</div>
        
        <div className="card-sections">
            {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
                <span className='text-lg'>{section.name}</span>
                <span className='text-sm'>{section.description}</span>
            </div>
            ))}
        </div>
      </div>

      <Image src={imageURL} alt={tag} width={500} height={700} className="bg-[#423D7C]" />
    </div>
  );
};

const CardList: React.FC = () => {
  return (
    <div className="pt-60 px-20  flex flex-col gap-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          tag={card.tag}
          imageURL={card.imageURL}
          sections={card.sections}
        />
      ))}
    </div>
  );
};

export default CardList;