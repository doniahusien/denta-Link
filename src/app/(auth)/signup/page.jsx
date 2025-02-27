"use client";

import React from 'react'
import LeftImg from '@/components/UI/LeftImg';
import imgsrc from "../../../../public/images/signup.svg";
import SignUpForm from '@/components/auth/SignUpForm';
import GuestRoute from '@/components/GuestRoute';
const signupPage = () => {
  return (
    <GuestRoute>
      <div className="flex flex-col md:flex-row shadow-lg mt-40 mb-5 min-h-screen md:mx-10 md:px-5">
        <LeftImg imgSrc={imgsrc} />
        <SignUpForm />
      </div>
    </GuestRoute>
  )
};

export default signupPage;