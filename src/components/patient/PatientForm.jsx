"use client"
import React, { useState, useEffect } from 'react';
import Label from '../auth/Label';
import SubmitBtn from '../auth/SubmitBtn';
import FileInput from '../UI/FileInput';
import Input from '../auth/Input';
import { addPatient } from '@/redux/features/patient/patientThunk';
import { useDispatch, useSelector } from 'react-redux';

const PatientForm = () => {
    const dispatch = useDispatch();
    const { error, success, loading } = useSelector(state => state.patient);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        title: '',
        age: '',
        gender: '',
        phone: '',
        category: '',
        description: '',
        file: null,
    });

    useEffect(() => {
        if (success) {
            setShowSuccessMessage(true);
            setFormData({
                name: '',
                title: '',
                age: '',
                gender: '',
                phone: '',
                category: '',
                description: '',
                location: '',
                file: null,
            });
            setTimeout(() => setShowSuccessMessage(false), 3000);
        }
    }, [success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const patientData = new FormData();
        Object.keys(formData).forEach(key => {
            patientData.append(key, formData[key]);
        });

        dispatch(addPatient(patientData));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    return (
        <div className="flex-1 flex justify-center items-center">
            <div className="md:p-6 rounded-lg max-w-sm w-full">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label text="Patient Name" />
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Title" />
                        <Input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Age" />
                        <Input type="text" name="age" value={formData.age} onChange={handleChange} />
                    </div>
                    <div className="flex gap-5 text-gray-500 text-sm">
                        <label className="text-black text-base">Gender</label>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div>
                        <Label text="Phone Number" />
                        <Input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Category" />
                        <select
                            className="w-full border border-gray-300 rounded-lg p-2"
                            value={formData.category}
                            name="category"
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="Endodontics">Endodontics</option>
                            <option value="Prosthodontics">Prosthodontics</option>
                            <option value="Diagnostics">Diagnostics</option>
                        </select>
                    </div>
                    <div>
                        <Label text="Location" />
                        <Input type="text" name="location" value={formData.location} onChange={handleChange} />
                    </div>
                    <div>
                        <Label text="Description" />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            cols="45"
                            rows="5"
                            className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <FileInput handleFileChange={handleFileChange} label="Upload Files" flag="true" />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    {showSuccessMessage && <p className="text-green-500 text-sm mt-2">Patient added successfully!</p>}
                    <div className="text-center">
                        <SubmitBtn text="Submit" loading={loading} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientForm;
