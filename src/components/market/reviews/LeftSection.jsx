import React from "react";
import { ArrowLeft } from "lucide-react";

const LeftSection = () => {
    return (
        <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg text-center md:text-left">
            <button className="mb-4 flex items-center text-gray-600 mx-auto md:mx-0">
                <ArrowLeft className="mr-2" />
            </button>
            <div className="flex flex-col justify-center items-center md:items-start h-full">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
                    What Our Customer Says?
                </h2>
                <p className="mt-4 text-gray-700 text-sm md:text-base">
                    Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect.
                </p>
            </div>
        </div>
    );
};

export default LeftSection;
