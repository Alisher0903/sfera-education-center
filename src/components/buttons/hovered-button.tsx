import Link from "next/link";
import {cn} from "@/lib/utils";

const HoveredButton = ({link = '', name, onClick, className}: {
    link?: string,
    name: string,
    onClick?: () => void,
    className?: string
}) => {
    return (
        <Link
            className={cn(
                "hovered-btn px-8 py-2 font-semibold tracking-wider rounded-xl text-base border-2 border-slate-700 hover:border-slate-900 text-slate-700 hover:text-white bg-white hover:bg-slate-700 duration-300",
                className
            )}
            href={link}
            onClick={onClick}
        >
            {name}
        </Link>
    );
};

export default HoveredButton;