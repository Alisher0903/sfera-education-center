import Image from "next/image";
import React from "react";
import {InfoCardProps} from "@/types/cards"



const InfoCard: React.FC<InfoCardProps> = ({ image, title, description, imageAlt = "Icon", color }) => {
  return (
    <div className="flex items-center  gap-4 max-w-3xl">
      <div className="min-w-[28px] mt-1">
        <Image src={image} alt={imageAlt} width={32} height={32} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl ">{title}</h3>
        <p className={`text-base `} style={{ color: color }}  >{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
