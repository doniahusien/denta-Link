"use client";
import ProtectedRoute from '@/components/ProtectedRoute';
import React from 'react'
import LeftImg from '@/components/UI/LeftImg'
import imgsrc from '../../../../../public/images/market/addTool.svg'
import ToolForm from '@/components/market/ToolForm'
const addToolPage = () => {
    return (
        <>
            <ProtectedRoute>
                <div className="flex flex-col md:flex-row py-10 shadow-lg sm:w-full md:w-full lg:w-3/4 mx-auto bg-blue-50 my-40">

                    <LeftImg imgSrc={imgsrc} header="Let's Add product" />

                    <ToolForm />

                </div>
            </ProtectedRoute>
        </>
    )
}

export default addToolPage