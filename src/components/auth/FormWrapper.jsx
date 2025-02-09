"use client";

export default function FormWrapper({ title, children, discription }) {
    return (
        
        <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded-xl shadow-xl px-10 py-20">
            <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
            <p  className="text-lg text-gray-400  mb-10 text-center">{discription}</p>
            {children}
        </div>
    );
}
