"use client"
import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
const PatientCard = ({ id, image, name, location, title }) => {
    const router = useRouter();
    const handleButtonClick = (e) => {
        e.stopPropagation();
        router.push(`/patient/${id}`)
    }
    return (
        <div className=" bg-white border border-gray-200 rounded-lg  transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125 hover:border-blue-500 shadow-md px-4 py-3 w-full sm:w-[40%] md:w-[35%] lg:w-[17%]">
            <div className="relative w-full h-40">
                <Image
                    src={image[0]}
                    alt={name}
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-500">Loaction:{location}</p>
                <p className="text-gray-500 truncate">Title:{title} </p>
            </div>
            <div className="mt-4 flex justify-end">
                <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-600 p-1 text-white rounded-full transition">
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}

export default PatientCard