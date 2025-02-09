"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import mainLinks from "../../../public/data/mainLinks";

const NavLinks = ({ isMobile = false }) => {
    const pathname = usePathname();
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleSubMenu = (label) => {
        setActiveSubMenu((prev) => (prev === label ? null : label));
    };

    return (
        <ul className={`${isMobile ? "space-y-4" : "flex space-x-6"} mt-5`}>
            {mainLinks.map((link) => (
                <li key={link.label} className={`relative ${!isMobile && link.subLinks ? "group" : ""}`}>
                    <div
                        className={`flex items-center justify-between ${isMobile ? "w-full" : ""}`}
                        onClick={isMobile && link.subLinks ? () => toggleSubMenu(link.label) : undefined}
                    >
                        <Link
                            href={link.href}
                            className={`text-lg ${pathname === link.href ? "text-blue-600" : "text-gray-800"} hover:text-blue-500`}
                        >
                            {link.label}
                        </Link>
                        {isMobile && link.subLinks && (
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${activeSubMenu === link.label ? "rotate-180" : ""}`}
                            />
                        )}
                    </div>
                    {link.subLinks && (
                        <ul
                            className={`overflow-hidden transition-all duration-300 ${isMobile
                                    ? activeSubMenu === link.label
                                        ? "max-h-60 p-3 bg-gray-100 rounded-md"
                                        : "max-h-0"
                                    : "absolute left-0 mt-2 bg-white shadow-md p-3 space-y-2 rounded-md w-40 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity"
                                }`}
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
};

export default NavLinks;
