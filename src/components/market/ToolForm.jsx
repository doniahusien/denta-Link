"use client"
import React, { useState } from 'react'
import { useEffect } from 'react';
import Image from 'next/image';
import Label from '../auth/Label';
import Input from '../auth/Input';
import SubmitBtn from '../auth/SubmitBtn';
import FileInput from '../UI/FileInput';
import fileSrc from "../../../public/images/icons/file.svg";
import fileId from "../../../public/images/icons/fileId.svg";
import { useDispatch ,useSelector} from 'react-redux';
import { addTool } from '@/redux/features/tools/toolThunk';
const ToolForm = () => {
    const { error, success, loading } = useSelector((state) => state.tool);
    const dispatch = useDispatch();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const [formData, setFormData] = useState({
        toolName: '',
        price: '',
        category: '',
        description: '',
        image: [],
    });
    useEffect(() => {
        if (success) {
            setShowSuccessMessage(true);
            setFormData({
                toolName: '',
                price: '',
                category: '',
                description: '',
                image: [],
            });
            setTimeout(() => setShowSuccessMessage(false), 3000);
        }
    }, [success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const toolData = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "images") {
                formData.image.forEach((i) => {
                    toolData.append("images", i);
                });
            } else {
                toolData.append(key, formData[key]);
            }
        });

        dispatch(addTool(toolData));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, image: [...formData.image, ...files] });
    };

    return (
        <div className="flex-1 flex justify-center items-center ">
            <div className="md:p-6 rounded-lg max-w-sm w-full">


                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label text="Product Name" />
                        <Input type="text" name="toolName" value={formData.toolName} onChange={handleChange} />
                    </div>

                    <div>
                        <Label text="Price" />
                        <Input type="text" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Category" />
                        <select className="w-full border border-gray-300 rounded-lg p-2" value={formData.category} name="category" onChange={handleChange}>
                            <option value='Endodontics'>Endodontics</option>
                            <option value='Prosthodontics'>Prosthodontics</option>
                            <option value='Diagnostics'>Diagnostics</option>
                        </select>
                    </div>
                    <div>
                        <Label text="Description" />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            cols="45"
                            rows="5"
                            className="w-full md:w-full lg:w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>


        <div>
                        <label className="block text-gray-700 mb-2 flex items-center space-x-2">
                            <Image src={fileId} alt="file icon" width={25} height={25} />
                            <span>Upload Images</span>
                        </label>
                        <div className="flex flex-col gap-2 items-center justify-between border border-gray-300 rounded-lg px-4 py-3 bg-[#EFFFF7] space-y-3 md:space-y-0">
                            <div className="flex items-center space-x-2">
                                <Image src={fileSrc} alt="file" width={23} height={23} />
                                <p className="text-xs sm:text-sm text-gray-600">Only .jpg and .png files</p>
                            </div>
                            <label className="bg-[#34FF9D] text-black text-sm py-1 px-5 rounded-md cursor-pointer hover:bg-green-500 transition duration-200">
                                Choose Files
                                <input
                                    type="file"
                                    name="image"
                                    accept=".jpg,.png"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        {/* Display Selected Images */}
                        {formData.image?.length > 0 && (
                            <div className="mt-2 grid grid-cols-3 gap-2">
                                {formData.image.map((file, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`selected-${index}`}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>                    {Error && <p className="text-red-500 text-sm mt-2">{loginError}</p>}
                    <div className="text-center">
                        <SubmitBtn text="Add" loading="" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ToolForm