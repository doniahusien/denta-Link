"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Edit } from "lucide-react";
import { useSelector } from "react-redux";
import profile from "../../../public/images/icons/profile.svg";
import Button from "../UI/Button/Button";

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
                    <div className="relative w-12 h-12">
                        <Image src={profile} alt="Profile Picture" className="rounded-full" />
                        <Link href="/edit">
                            <div className="absolute bottom-0 right-0 p-1 text-blue-500 bg-white rounded-full">
                                <Edit className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>
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
