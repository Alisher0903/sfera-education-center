import React from 'react';
import colors from "@/lib/colors"
import {cn} from "@/lib/utils";
import {raleway} from "@/app/fonts/fonts";

interface SectionTitleProps {
    title: string;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title, className}) => {
    return (
        <h2 className={cn("flex justify-center text-3xl text-center font-[600]", className, raleway.className)} style={{color: colors.green}}>
            {title}
        </h2>
    );
};

export default SectionTitle;
