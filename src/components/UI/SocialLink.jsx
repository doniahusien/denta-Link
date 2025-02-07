import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialLink = ({ href, icon, label }) => (
    <Link href={href} className="flex flex-row gap-2 mt-2">
        <Image src={icon} alt={label} width={30} height={30} />
        <span>{label}</span>
    </Link>
)
export default SocialLink;