'use client';

import Image from 'next/image';

export interface VisitData {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface VisitsCardProps {
  visitData: VisitData;
  isLeft?: boolean;
}

const VisitsCard: React.FC<VisitsCardProps> = ({ visitData, isLeft = true }) => {
  if (!visitData) return null;

  return (
    <div className="md:w-[80%] mx-auto bg-primary bg-opacity-10 py-10 md:p-10 rounded-xl shadow-md duration-200 my-10 border-2 border-[#1CA855]">
      <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} justify-start items-center`}>
        <div className="flex items-center justify-center rounded-xl text-primary md:w-[40%] h-[250px] overflow-hidden">
          <Image
            src={visitData.image}
            alt="img"
            width={500}
            height={300}
            className="w-full h-full hover:scale-125 duration-200 object-cover grayscale hover:grayscale-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:w-[60%] p-10">
          <h3 className="mb-5 text-3xl font-bold text-[#1CA855] ">
            {visitData.title}
          </h3>
          <h3 className="mb-5 text-xl font-medium tracking-wide text-[#777777] ">
            {visitData.date}
          </h3>
          <p className="text-base font-medium md:leading-relaxed text-body-color text-center">
            {visitData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitsCard;
