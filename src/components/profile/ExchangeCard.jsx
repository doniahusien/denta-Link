"use client";
import React, { useState } from "react";
import Image from "next/image";
import EditForm from "./EditForm";
import Fav from "../UI/Fav";
import { format } from "date-fns";
import { Phone, Trash2 } from "lucide-react";

const ExchangeCard = ({
    isFavorite,
    name,
    publisher,
    toothName,
    exchangeWith,
    notes,
    contact,
    createdAt,
    imageSrc,
    onEdit,
    onDelete,
    exchangeId,
}) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleForm = () => setIsFormVisible(!isFormVisible);
    const formattedDate = createdAt
        ? format(new Date(createdAt), "MMMM dd, yyyy hh:mm a")
        : "N/A";

    const handleSave = (updatedData) => {
        if (onEdit) {
            const updatedObject = {
                toothName: updatedData.toothName || toothName,
                exchangeWith: updatedData.exchangeWith || exchangeWith,
                notes: updatedData.notes || notes,
                contact: updatedData.contact || contact,
                createdAt: updatedData.createdAt || createdAt,
            };
            onEdit(updatedObject);
        }
        setIsFormVisible(false);
    };

    return (
        <div className="mb-6 w-full m-auto px-4 sm:px-6 lg:px-8">
            <div className="relative  flex flex-col  md:flex-row items-center md:items-start gap-4 rounded-xl border border-blue-300 p-4 shadow-sm bg-white w-full max-w-4xl ">
                {/* Image & Details Section */}
                <div className="rounded-lg p-5  md:w-[500px] sm:w-96 lg:w-[1000px] relative mx-auto">
                    <div className="flex flex-col gap-2 sm:flex-row md:flex-row justify-between items-center md:items-start mb-4">
                        {/* Image Section */}
                        <div className="flex-shrink-0">
                            <Image
                                src={imageSrc}
                                alt="Tool image"
                                width={200}
                                height={200}
                                className="md:w-40 md:h-40 lg:w-52 lg:h-52 sm:w-28 sm:h-28"
                            />
                        </div>

                        {/* Details */}
                        <div className="lg:text-lg sm:text-sm space-y-2 sm:w-full sm:pl-4">
                            <p>
                                <span className="font-semibold">Publisher:</span> {publisher}
                            </p>
                            <p>
                                <span className="font-semibold">Tooth Name:</span> {toothName}
                            </p>
                            <p>
                                <span className="font-semibold">Exchange with:</span> {exchangeWith}
                            </p>
                        </div>
                        {/* Favorite, Edit, Delete */}
                        <div className="flex items-center gap-2 absolute top-4 right-4">
                            {isFavorite && exchangeId && <Fav fav={isFavorite} exchangeId={exchangeId} />}

                            {onEdit && (
                                <button onClick={toggleForm} className="cursor-pointer hover:opacity-80 transition" aria-label="Edit">
                                    <Image src="/images/icons/profile/edit.svg" alt="Edit" width={20} height={20} />
                                </button>
                            )}

                            {onDelete && (
                                <button
                                    onClick={onDelete}
                                    className="cursor-pointer hover:text-red-600 transition"
                                    aria-label="Delete"
                                    title="Delete"
                                    type="button"
                                >
                                    <Trash2 size={20} />
                                </button>
                            )}
                        </div>

                    </div>

                    {/* Notes & Contact */}
                    <div className="flex flex-col md:flex-row justify-between gap-3 items-start md:items-center mt-4">
                        <div className="flex flex-col">
                            <span className="font-semibold  text-gray-500">Notes:</span>
                            <p className="text-gray-700">{notes}</p>
                        </div>

                        <div className="text-left flex flex-col gap-1 mt-2 md:mt-0">
                            <span className="font-semibold text-gray-500">Contact:</span>
                            <p className="text-black text-sm flex items-center">
                                <Phone className="w-4 h-4 mr-1" />
                                <span>{contact}</span>
                            </p>
                            <p className="text-gray-400 text-xs">{formattedDate}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Form */}
            {isFormVisible && (
                <div className="w-full max-w-3xl mx-auto mt-4">
                    <EditForm
                        fields={[
                            { label: "Name", name: "name", value: name || "" },
                            { label: "Tooth Name", name: "toothName", value: toothName },
                            { label: "Exchange with", name: "exchangeWith", value: exchangeWith },
                            { label: "Notes", name: "notes", value: notes },
                            { label: "Contact", name: "contact", value: contact },
                            { label: "Created At", name: "createdAt", value: createdAt },
                        ]}
                        onSave={handleSave}
                        exchangeId={exchangeId}
                        onClose={() => setIsFormVisible(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default ExchangeCard;
