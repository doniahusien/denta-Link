import React from "react";
import Image from "next/image";
import Link from "next/link";

const IconCard = ({ icon, title, href }) => {
  return (
    <Link href={href}>
      <div className="h-[300px] flex flex-col items-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
        <Image
          src={icon}
          alt={title}
          width={127} // Increased from smaller value
          height={124} // Increased from smaller value
          className="mb-4"
        />
        <h3 className="text-lg font-medium mt-auto">{title}</h3>
      </div>
    </Link>
  );
};

export default IconCard;
