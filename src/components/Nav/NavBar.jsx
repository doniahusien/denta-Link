"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "../UI/Logo";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <header className="bg-transparent absolute top-0 left-0 z-[1000] w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 sm:px-8">
                <Logo />
                <button onClick={toggleMenu} className="lg:hidden text-gray-800 focus:outline-none">
                    <Menu className="w-6 h-6" />
                </button>
                <nav className="hidden lg:flex space-x-5">
                    <NavLinks />
                </nav>
                <div className="hidden lg:flex">
                    <UserActions />
                </div>
            </div>
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default NavBar;
