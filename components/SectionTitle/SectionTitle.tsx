import React from 'react';
import colors from "@/lib/colors"
interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
    return (
        <h2 className=" flex justify-center text-3xl text-center" style={{color:colors.green}}>
            {title}
        </h2>
    );
};

export default SectionTitle;
