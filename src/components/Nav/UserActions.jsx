"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import DropDown from "../UI/DropDown";


import { menuItems } from "../profile/ProfileSidebar";

const UserActions = ({ isMobile = false }) => {
    const { token } = useSelector((state) => state.auth);

    return (
        <div className={`flex ${isMobile ? "flex-col space-y-6" : "space-x-6"} mt-5`}>
            {token ? (
                <>
                    <Link href="/cart" className="flex items-center text-blue-600">
                        <ShoppingCart className="w-6 h-6 mr-1" />
                        <p>My Cart</p>
                    </Link>
                    <DropDown links={menuItems} />
                </>
            ) : (
                <>
                    <Button title="Install App" link="/" className={`${isMobile ? "block w-full" : ""}`} />
                    <Button title="Log in" link="/login" className={`${isMobile ? "block w-full" : ""}`} />
                </>
            )}
        </div>
    );
};

export default UserActions;
