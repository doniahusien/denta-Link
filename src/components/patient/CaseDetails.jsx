import React from 'react'
import Link from 'next/link'

const CaseDetails = ({patient}) => {
    return (
        <div className='shadow-lg py-5'>
            <div className="p-4 bg-white rounded-lg space-y-4">
                <h3 className="text-4xl font-semibold border-b pb-3">Case details</h3>
                <div className="space-y-3 text-lg">
                    <p className='text-blue-600'>
                        <span className="font-semibold text-gray-400 ">Case Type: </span>
                        {patient.title}
                    </p>
                    <p>
                        <span className="font-semibold  text-gray-400">Category: </span>
                        {patient.category}
                    </p>
                    <p>
                        <span className="font-semibold  text-gray-400">Case Description: </span>
                        {patient.description}
                    </p>
                    <p>
                        <span className="font-semibold  text-gray-400">Date Added: </span>
                        {patient.createdAt}
                    </p>
                </div>
            </div>

            {/* Attachments Section */}
            <div className="p-8 bg-white rounded-lg space-y-3">
                <h3 className="text-4xl font-semibold border-b pb-3">Attachments</h3>
                <Link href="#" className="text-gray-500 hover:underline" download="">
                dental_report.pdf
                </Link>
            </div>

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
    )
}

export default CaseDetails