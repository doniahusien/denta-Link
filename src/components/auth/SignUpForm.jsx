"use client"
import React, { useState } from 'react'

import Link from 'next/link'
//phone input
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

//component 
import Input from './Input'
import Label from './Label'
import SubmitBtn from './SubmitBtn'
import FileInput from '../UI/FileInput';

//images
import Image from 'next/image'
import fileSrc from '../../../public/images/icons/file.svg';
import fileId from '../../../public/images/icons/fileId.svg';

//redux
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '@/redux/features/auth/authThunk';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const { error, loading } = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        name: '',
        academicYear: '',
        universityID: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        idPicture: null,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, idPicture: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('academicYear', formData.academicYear);
        data.append('universityID', formData.universityID);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('confirmPassword', formData.confirmPassword);
        data.append('phone', formData.phone);
        if (formData.idPicture) {
            data.append('idPicture', formData.idPicture);
        }

        const result = await dispatch(signupUser(data))
    }

    return (

        <div className="flex-1 flex justify-center items-center lg:p-8 lg:pl-8">
            <div className=" p-8 rounded-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center mb-4">Create Account</h2>
                <p className="text-center text-gray-600 mb-6">
                    Join our community of dental students and simplify your patient search.
                </p>

                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div>
                        <Label text="Name" />
                        <Input type="text" placeholder="Your name" value={formData.name} name="name" onChange={handleChange} />
                    </div>
                    {error.name && <p className="text-red-500 text-xs mt-1">{error.name}</p>}


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label text="Academic Year" />
                            <select className="w-full border border-gray-300 rounded-lg p-2" value={formData.academicYear} name="academicYear" onChange={handleChange}>
                                <option>Select level</option>
                                <option value='1nd'>1st</option>
                                <option value='2nd'>2nd</option>
                                <option value='3nd'>3rd</option>
                                <option value='4nd'>4th</option>
                                <option value='5nd'>5th</option>
                            </select>
                        </div>
                        <div>
                            <Label text="Student ID" />
                            <Input type="text" placeholder="e.g., 100065259" value={formData.universityID} name="universityID" onChange={handleChange} />
                        </div>
                        {error.universityID && <p className="text-red-500 text-xs mt-1">{error.universityID}</p>}
                        {error.academicYear && <p className="text-red-500 text-xs mt-1">{error.academicYear}</p>}
                    </div>


                    <div>
                        <Label text="Email Address " />
                        <Input type="email" placeholder="example@gmail.com" value={formData.email} name="email" onChange={handleChange} />
                    </div>
                    {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}


                    <div>
                        <Label text="Password" />
                        <Input type="text" isPasswordField name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    </div>
                    {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}


                    <div>
                        <Label text="Confirm Password " />
                        <Input type="text" isPasswordField name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                    </div>
                    {error.confirmPassword && <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>}


                    <div>
                        <Label text="Phone Number" />
                        <PhoneInput
                            country={'us'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            inputClass="w-full"
                            inputStyle={{ height: '40px', width: '100%', fontSize: '16px' }}
                            containerStyle={{ width: '100%' }}
                        />
                    </div>
                    {error.phone && <p className="text-red-500 text-xs mt-1">{error.phone}</p>}

                    <FileInput onChange={handleFileChange} label="Upload Your Student ID" />
                    {error.universityID && <p className="text-red-500 text-xs mt-1">{error.universityID}</p>}


                    <div className="text-center">
                        <SubmitBtn text="Sign up" loading={loading} />
                    </div>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
                </p>
            </div>
        </div>

    )
}

export default SignUpForm