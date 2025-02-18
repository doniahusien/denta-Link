"use client";
import React, { useState } from "react";
import Image from "next/image";
import EditForm from "./EditForm";
import Fav from "../UI/Fav";
import { Phone } from "lucide-react";

const ExchangeCard = ({ isFavorite, publisher, name, exchangeWith, notes, contact, date, imageSrc, onEdit }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleForm = () => setIsFormVisible(!isFormVisible);

    const handleSave = (updatedData) => {
        if (onEdit) {
            const updatedObject = {
                name: updatedData.name || name,
                exchangeWith: updatedData.exchangeWith || exchangeWith,
                notes: updatedData.notes || notes,
                contact: updatedData.contact || contact,
                date: updatedData.date || date,
            };
            onEdit(updatedObject);
        }
        setIsFormVisible(false);
    };

    return (
        <div className="mb-6 w-full px-5 ">
            <div className="relative flex flex-col md:flex-row items-center gap-4 rounded-xl border border-blue-300 p-4 shadow-sm bg-white ">
                <div className=" rounded-lg p-5 md:w-[500px] sm:w-96 relative">
                    <div className="flex flex-col gap-2 sm:flex-col md:flex-row justify-between items-center mb-4">
                        <div>
                            <Image
                                src={imageSrc || "/images/default-tool.svg"}
                                alt="Tooth icon"
                                width={100}
                                height={100}
                                className="w-28 h-28"
                            />
                        </div>
                        <div className="text-sm space-y-1">
                            <p>
                                <span className="font-semibold">Publisherrr :</span> {publisher}
                            </p>
                            <p>
                                <span className="font-semibold">Name:</span> {name}
                            </p>
                            <p>
                                <span className="font-semibold">Exchange with:</span> {exchangeWith}
                            </p>
                        </div>
                        {isFavorite==true && <Fav fav={isFavorite} patientId={patientId} />}

                        {/* Edit Icon */}
                        {onEdit && (
                            <button onClick={toggleForm} className="absolute top-8 right-2">
                                <Image
                                    src="/images/icons/profile/edit.svg"
                                    alt="Edit"
                                    width={20}
                                    height={20}
                                    className="cursor-pointer hover:opacity-80 transition"
                                />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-500">Notes:</span>
                            <p>{notes}</p>
                        </div>

                        <div className="text-left flex flex-col gap-1">
                            <span className="font-semibold text-gray-500">Contact:</span>
                            <p className="text-black text-sm">
                                <Phone className="inline w-4 h-4 mr-1" />
                                <span>{contact}</span>
                            </p>
                            <p className="text-gray-400 text-xs">{date}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Form */}
            {isFormVisible && (
                <EditForm
                    fields={[
                        { label: "Name", name: "name", value: name },
                        { label: "Exchange with", name: "exchangeWith", value: exchangeWith },
                        { label: "Notes", name: "notes", value: notes },
                        { label: "Contact", name: "contact", value: contact },
                        { label: "Date", name: "date", value: date },
                    ]}
                    onSave={handleSave}
                    onClose={() => setIsFormVisible(false)}
                />
            )}
        </div>
    );
};

export default ExchangeCard;
