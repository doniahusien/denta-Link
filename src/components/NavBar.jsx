"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingCart, Edit } from "lucide-react";
import { useSelector } from "react-redux";
import mainLinks from "../../public/data/mainLinks";
import Button from "./UI/Button/Button";
import Logo from "./UI/Logo";
import profile from "../../public/images/icons/profile.svg";

const NavBar = () => {
    const { token } = useSelector((state) => state.auth);
    const pathname = usePathname();
    const [isMarketOpen, setIsMarketOpen] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMarketHover = (label) => setIsMarketOpen(label);
    const closeMarket = () => setIsMarketOpen(null);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const renderNavLinks = (isMobile = false) => (
        <ul className={`${isMobile ? "space-y-4" : "flex space-x-6"}`}>
            {mainLinks.map((link) => (
                <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.subLinks && handleMarketHover(link.label)}
                    onMouseLeave={closeMarket}
                >
                    <Link
                        href={link.href}
                        className={`text-lg ${pathname === link.href ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}
                    >
                        {link.label}
                    </Link>
                    {link.subLinks && isMarketOpen === link.label && (
                        <ul
                            className={`absolute ${isMobile ? "mt-2 bg-gray-100" : "left-0 mt-2 bg-white shadow-md"} 
                        p-3 space-y-2 rounded-md ${isMobile ? "" : "w-40"}`}
                        >
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
    );

    const renderUserActions = (isMobile = false) => (
        <div className={`flex ${isMobile ? "flex-col space-y-6" : "space-x-6"}`}>
            {token ? (
                <>
                    <Link href="/cart" className="flex items-center text-blue-600">
                        <ShoppingCart className="w-6 h-6 mr-1" />
                        <p>My Cart</p>
                    </Link>
                    <div className="relative w-12 h-12">
                        <Image src={profile} alt="Profile Picture" className="rounded-full" />
                        <Link href="/edit-profile">
                            <div className="absolute bottom-0 right-0 pt-5 pl-6 text-blue-500">
                                <Edit className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <Button title="Install App" link="/" className={`${isMobile ? "block" : ""}`} />
                    <Button title="Log in" link="/login" className={`${isMobile ? "block" : ""}`} />
                </>
            )}
        </div>
    );

    return (
        <header className="bg-white">
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
                    <Menu className="w-6 h-6" />
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-5">{renderNavLinks()}</nav>

                {/* User Actions (Desktop) */}
                <div className="hidden lg:flex">{renderUserActions()}</div>
            </div>

            {/* Mobile Navigation */}
            <div
                id="mobile-menu"
                className={`lg:hidden fixed inset-0 bg-white transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } p-6`}
            >
                <button onClick={toggleMenu} className="absolute top-4 right-6 text-gray-800">
                    ✖
                </button>
                <nav className="flex flex-col space-y-6 mt-10">
                    {renderNavLinks(true)}
                    {renderUserActions(true)}
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
