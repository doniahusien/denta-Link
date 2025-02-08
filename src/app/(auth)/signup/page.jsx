import React from 'react'
import LeftImg from '@/components/UI/LeftImg';
import imgsrc from "../../../../public/images/signup.svg";
import SignUpForm from '@/components/auth/SignUpForm';
import GuestRoute from '@/components/GuestRoute';
const signupPage = () => {
  return (
    <GuestRoute>
      <div className="flex flex-col md:flex-row min-h-screen px-20">
        <LeftImg imgSrc={imgsrc} />
        <SignUpForm />
      </div>
    </GuestRoute>
  )
};

export default signupPage;