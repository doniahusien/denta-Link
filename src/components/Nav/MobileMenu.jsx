"use client";
import React from "react";
import { X } from "lucide-react";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div
            className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } p-6 overflow-y-auto`}
        >
            <button onClick={toggleMenu} className="absolute top-4 right-6 text-gray-800">
                <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col space-y-6 mt-10">
                <NavLinks isMobile />
                <UserActions isMobile />
            </nav>
        </div>
    );
};

export default MobileMenu;
