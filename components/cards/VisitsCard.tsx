'use client';

import { VisitsCardProps } from '@/types/cards';
import Image from 'next/image';
import colors from "@/lib/colors"
import { URL } from '@/helpers/api';

const VisitsCard: React.FC<VisitsCardProps> = ({ visitData, isLeft = true }) => {
  if (!visitData) return null;

  return (
    <div className="mx-auto bg-primary bg-opacity-10 py-10 md:p-10 rounded-xl shadow-md duration-200 my-10" style={{ border: `2px solid ${colors.green}` }}>
      <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} justify-start items-center`}>
        <div className="flex items-center justify-center rounded-xl text-primary md:w-[40%] h-[250px] overflow-hidden">
          <Image
            src={`${URL}${visitData.photo}`} 
            alt={visitData.full_name} 
            width={550}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:w-[60%] p-10">
          <h3 className="mb-5 text-3xl" style={{ color: colors.green }}>
            {visitData.full_name}
          </h3>
          <h3 className="mb-5 text-xl font-medium tracking-wide" style={{ color: colors.grayText }}>
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
