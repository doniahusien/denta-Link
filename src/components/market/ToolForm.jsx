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
import { useDispatch, useSelector } from 'react-redux';
import { addTool } from '@/redux/features/tools/toolThunk';

const ToolForm = () => {
    const { error, success, loading } = useSelector((state) => state.tool);
    const dispatch = useDispatch();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const [formData, setFormData] = useState({
        toolName: '',
        price: '',
        category: 'Endodontics', // Set default value
        description: '',
        image: [],
    });

    useEffect(() => {
        if (success) {
            setShowSuccessMessage(true);
            setFormData({
                toolName: '',
                price: '',
                category: 'Endodontics',
                description: '',
                image: [],
            });
            setTimeout(() => setShowSuccessMessage(false), 3000);
        }
    }, [success]);

    const validateForm = () => {
        const errors = {};
        if (!formData.toolName.trim()) errors.toolName = 'Tool name is required';
        if (!formData.price.trim()) errors.price = 'Price is required';
        if (isNaN(Number(formData.price))) errors.price = 'Price must be a number';
        if (!formData.category) errors.category = 'Category is required';
        if (!formData.description.trim()) errors.description = 'Description is required';
        if (formData.image.length === 0) errors.image = 'At least one image is required';
        
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        const toolData = new FormData();
        toolData.append('toolName', formData.toolName);
        toolData.append('price', formData.price);
        toolData.append('category', formData.category);
        toolData.append('description', formData.description);
        
        formData.image.forEach((file) => {
            toolData.append('image', file);
        });

        dispatch(addTool(toolData));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (validationErrors[name]) {
            setValidationErrors({
                ...validationErrors,
                [name]: null
            });
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setFormData({ ...formData, image: [...formData.image, ...files] });
            if (validationErrors.image) {
                setValidationErrors({
                    ...validationErrors,
                    image: null
                });
            }
        }
    };

    const removeImage = (index) => {
        const newImages = [...formData.image];
        newImages.splice(index, 1);
        setFormData({ ...formData, image: newImages });
    };

    return (
        <div className="flex-1 flex justify-center items-center">
            <div className="md:p-6 rounded-lg max-w-sm w-full">
                {showSuccessMessage && (
                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                        Tool added successfully!
                    </div>
                )}
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label text="Product Name" />
                        <Input 
                            type="text" 
                            name="toolName" 
                            value={formData.toolName} 
                            onChange={handleChange} 
                        />
                        {validationErrors.toolName && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.toolName}</p>
                        )}
                    </div>

                    <div>
                        <Label text="Price" />
                        <Input 
                            type="text" 
                            name="price" 
                            value={formData.price} 
                            onChange={handleChange} 
                        />
                        {validationErrors.price && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.price}</p>
                        )}
                    </div>
                    
                    <div>
                        <Label text="Category" />
                        <select 
                            className="w-full border border-gray-300 rounded-lg p-2" 
                            value={formData.category} 
                            name="category" 
                            onChange={handleChange}
                        >
                            <option value="Endodontics">Endodontics</option>
                            <option value="Prosthodontics">Prosthodontics</option>
                            <option value="Diagnostics">Diagnostics</option>
                        </select>
                        {validationErrors.category && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.category}</p>
                        )}
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
                        {validationErrors.description && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.description}</p>
                        )}
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
                                    accept=".jpg,.jpeg,.png"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        {validationErrors.image && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.image}</p>
                        )}
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
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <div className="text-center">
                        <SubmitBtn text={loading ? "Adding..." : "Add"} disabled={loading} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ToolForm;