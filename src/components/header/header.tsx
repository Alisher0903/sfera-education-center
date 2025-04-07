"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {X, AlignRight} from "lucide-react";
import {headerStyles, useNavLinks} from "@/lib/constants";
import i18n from "i18next";
import {setItem} from "@/lib/storage";
import {savedLanguage} from "@/lib/i18n";
import Networks from "@/components/header/networks";

const Header: React.FC = () => {
    const pathname = usePathname();
    const {navItems} = useNavLinks();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState(savedLanguage());
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 70);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lang: string) => {
        i18n?.changeLanguage(lang);
        setItem<string>('i18nextLng', lang);
        setLanguage(lang);
    }

    const animRender = (isActive: boolean) => {
        return <span
            className={`absolute left-0 bottom-0 h-[2px] bg-green-600 transition-all duration-300 ease-in-out ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
        />
    }

    return (
        <header
            className={
                `sticky transition-all duration-300 z-50
                ${isScrolled
                    ? 'bg-gradient-to-t from-white to-green-50 lg:bg-white/80 lg:backdrop-blur-md shadow-sm top-0 lg:top-2 lg:rounded-2xl lg:right-2 lg:left-2 lg:px-3 lg:w-[99%] lg:mx-auto'
                    : 'w-full bg-gradient-to-t from-white to-green-50 top-0 left-0'
                }`
            }
        >
            <div className="mx-auto p-5 lg:px-10 flex items-center justify-between">
                <div className={'flex items-center space-x-16'}>
                    {/* Logo */}
                    <Link href="/" className={'z-[51]'} onClick={() => setIsMenuOpen(false)}>
                        <Image src="/sfera-logo.png" alt="SFERA Academy" width={120} height={40}/>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.id + index}
                                href={item.link}
                                className={`${headerStyles.links} ${pathname === item.link ? 'text-green-600' : ''}`}
                            >
                                {item.name}
                                {animRender(pathname === item.link)}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Contact and Social Icons */}
                <div className={'hidden lg:flex'}>
                    <Networks changeLanguage={changeLanguage} language={language}/>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-800 focus:outline-none relative w-6 h-6 cursor-pointer z-[51]"
                    onClick={toggleMenu}
                >
                    <AlignRight
                        className={`${headerStyles.menuBtn} ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
                    />
                    <X
                        className={`${headerStyles.menuBtn} ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={`lg:hidden fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "w-full sm:w-[350px] opacity-100" : "w-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-center space-y-4 py-20 px-5 h-full">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.id + index}
                            href={item.link}
                            className={`${headerStyles.links} ${pathname === item.link ? 'text-green-600' : ''}`}
                            onClick={toggleMenu}
                        >
                            {item.name}
                            {animRender(pathname === item.link)}
                        </Link>
                    ))}
                    <div className={'lg:hidden'}>
                        <Networks changeLanguage={changeLanguage} language={language}/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;