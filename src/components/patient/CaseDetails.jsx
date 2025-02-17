"use client";
import React, { useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

const CaseDetails = ({ patient }) => {
    const [pdfUrl, setPdfUrl] = useState(null);

    const generatePDF = async () => {
        const doc = new jsPDF();
        const images = patient.images || [];

        if (images.length === 0) {
            alert("No images available for PDF generation.");
            return;
        }

        for (let i = 0; i < images.length; i++) {
            const imageSrc = images[i];
            const imgData = await getImageData(imageSrc);

            if (imgData) {
                if (i > 0) doc.addPage(); 
                doc.addImage(imgData, "JPEG", 10, 10, 180, 160);
            }
        }

        const pdfBlob = doc.output("blob");
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfUrl);
    };

  
    const getImageData = (imageSrc) => {
        return new Promise((resolve, reject) => {
            const img = new window.Image(); 
            img.crossOrigin = "Anonymous"; 
            img.src = imageSrc;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const imgData = canvas.toDataURL("image/jpeg");
                resolve(imgData);
            };

            img.onerror = (err) => reject(err);
        });
    };

    const openPDFInNewTab = () => {
        if (pdfUrl) {
            window.open(pdfUrl, "_blank");
        }
    };

    return (
        <div className="shadow-lg py-5">
            <div className="p-4 bg-white rounded-lg space-y-4">
                <h3 className="text-4xl font-semibold border-b pb-3">Case details</h3>
                <div className="space-y-3 text-lg">
                    <p className="text-blue-600">
                        <span className="font-semibold text-gray-400">Case Type: </span>
                        {patient.title}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-400">Category: </span>
                        {patient.category}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-400">Case Description: </span>
                        {patient.description}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-400">Date Added: </span>
                        {new Date(patient.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* Image Gallery */}
            {patient.images?.length > 0 && (
                <div className="p-8 bg-white rounded-lg space-y-3">
                    <h3 className="text-4xl font-semibold border-b pb-3">Images</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {patient.images.map((image, index) => (
                            <div key={index} className="relative w-full h-40">
                                <img
                                    src={image}
                                    alt={`Patient Image ${index + 1}`}
                                    className="object-cover rounded-lg w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={generatePDF}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Convert to PDF
                    </button>
                </div>
            )}

            {/* Attachments Section */}
            {pdfUrl && (
                <div className="p-8 bg-white rounded-lg space-y-3">
                    <h3 className="text-4xl font-semibold border-b pb-3">Attachments</h3>
                    <button
                        onClick={openPDFInNewTab}
                        className="block mt-2 text-gray-500 hover:underline"
                    >
                        Data.pdf
                    </button>
                </div>
            )}

            {/* Contact Information Section */}
            <div className="p-8 bg-white rounded-lg space-y-3">
                <h3 className="text-4xl font-semibold border-b pb-3">Contact Information</h3>
                <p>
                    <span className="font-semibold">Phone: </span>
                    <Link href={`tel:${patient.phone}`} className="text-black hover:underline">
                        {patient.phone}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CaseDetails;
