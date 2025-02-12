import React from 'react'
import Image from 'next/image'
import fileSrc from '../../../public/images/icons/file.svg';
import fileId from '../../../public/images/icons/fileId.svg';

const FileInput = ({handleFileChange,label,flag="false"}) => {
    return (

        <div>
            <label className="block text-gray-700 mb-2 flex items-center space-x-2">
                <Image src={fileId} alt="file icon" width={25} height={25} />
                <span>{label}</span>
            </label>
            <div className={`flex ${flag === "true" ? "flex-col" : "md:flex-row "} items-center justify-between border border-gray-300 rounded-lg px-4 md:px-5 py-3 bg-[#EFFFF7] space-y-3 md:space-y-01`}>

                <div className="flex items-center space-x-2">
                    <Image src={fileSrc} alt="file" width={23} height={23} />
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        Only .jpg and .png files
                    </p>
                </div>
                <label className={`${flag === "true" ?"bg-gray-200":"bg-[#34FF9D]"} text-black text-xs sm:text-sm md:text-base py-1 px-3 md:px-5 rounded-md cursor-pointer hover:bg-green-500 transition duration-200`}>
                    Choose File
                    <input type="file" accept=".jpg,.png" className="hidden" onChange={handleFileChange} />
                </label>
            </div>
        </div>
    )
}

export default FileInput