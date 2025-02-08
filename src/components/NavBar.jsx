"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import mainLinks from "../../public/data/mainLinks";
import Button from "./UI/Button/Button";
import Logo from "./UI/Logo";

const NavBar = () => {
    const pathname = usePathname();
    const [isMarketOpen, setIsMarketOpen] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMarketMouseEnter = (label) => setIsMarketOpen(label);
    const handleMarketMouseLeave = () => setIsMarketOpen(null);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-[#247CFF40]">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 sm:px-8">

                {/* Logo */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Logo />
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-800 focus:outline-none"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-5">
                    <ul className="flex space-x-6">
                        {mainLinks.map((link) => (
                            <li
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.subLinks && handleMarketMouseEnter(link.label)}
                                onMouseLeave={handleMarketMouseLeave}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-lg font-medium ${pathname === link.href ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}
                                >
                                    {link.label}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.subLinks && isMarketOpen === link.label && (
                                    <ul className="absolute left-0 mt-2 bg-white shadow-md text-gray-800 p-3 space-y-2 rounded-md w-40">
                                        {link.subLinks.map((subLink) => (
                                            <li key={subLink.label}>
                                                <Link href={subLink.href} className="block hover:text-blue-500">
                                                    {subLink.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Actions */}
                <div className="hidden lg:flex items-center space-x-6">
                    <Button title="Install App" link="/" />
                    <Button title="Log in" link="/signin" />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                id="mobile-menu"
                className={`lg:hidden fixed inset-0 bg-white transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} p-6`}
            >
                <button onClick={toggleMenu} className="absolute top-4 right-6 text-gray-800">
                    ✖
                </button>

                <nav className="flex flex-col space-y-6 mt-10">
                    <ul className="space-y-4">
                        {mainLinks.map((link) => (
                            <li
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.subLinks && handleMarketMouseEnter(link.label)}
                                onMouseLeave={handleMarketMouseLeave}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-lg ${pathname === link.href ? "text-blue-500" : "text-gray-800"}`}
                                >
                                    {link.label}
                                </Link>

                                {/* Dropdown for Mobile */}
                                {link.subLinks && isMarketOpen === link.label && (
                                    <ul className="mt-2 bg-gray-100 p-3 space-y-2 rounded-md">
                                        {link.subLinks.map((subLink) => (
                                            <li key={subLink.label}>
                                                <Link href={subLink.href} className="block hover:text-blue-500">
                                                    {subLink.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* User Actions (Mobile) */}
                    <Button title="Install App" link="/" className="block md:hidden" />
                    <Button title="Log in" link="/signin" className="block md:hidden" />
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
