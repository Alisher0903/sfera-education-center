import {ReactNode} from "react";

export interface IHeader {
    translateItems: ITranslate[];
    networkItems: INetworks[];
}

export interface INavMainProps {
    id: string
    name: string
}

export interface INavItems extends INavMainProps {
    link: string;
}

export interface ITranslate extends INavMainProps {
    path: string
    mobileLabel: string
}

export interface INetworks {
    icon: ReactNode
    name?: string
    link: string
    isStyle?: boolean
}