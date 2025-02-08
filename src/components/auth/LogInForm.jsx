"use client"
import React, { useState } from 'react';
import Link from 'next/link';

//components
import Label from './Label';
import Input from './Input';
import SubmitBtn from './SubmitBtn';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/redux/features/auth/authThunk';

const LogInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loginError, loading } = useSelector(state => state.auth);
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser({ email, password }))
    }
    return (
        <div className="flex-1 flex justify-center items-center p-6">
            <div className="p-6 rounded-lg max-w-sm w-full">
                <h2 className="text-3xl font-semibold text-center mb-4">Welcome back!</h2>
                <p className="text-center text-gray-500 mb-4 text-lg">
                    Enter your details to login into your account.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label text="Email Address" />
                        <Input type="email" name="email" value={email} onChange={handleEmail} />
                    </div>

                    <div>
                        <Label text="Password" />
                        <Input type="text" name="password" value={password} onChange={handlePassword} />
                    </div>
                    {loginError && <p className="text-red-500 text-sm mt-2">{loginError}</p>}


                    <div className="flex items-center pb-5 justify-between text-sm">
                        <label className="flex items-center text-gray-600">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <Link href="/forget" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="text-center">
                        <SubmitBtn text="Login" loading={loading} />
                    </div>
                </form>


                <p className="text-center text-gray-500 mt-3 text-md">
                    Don't have an account? <Link href="/signup" className="text-blue-500">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default LogInForm;
