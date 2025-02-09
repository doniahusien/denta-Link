import React from 'react'
import LeftImg from '@/components/UI/LeftImg';
import imgsrc from "../../../../public/images/login.svg";
import LogInForm from '@/components/auth/LogInForm';
import GuestRoute from '@/components/GuestRoute';
const loginPage = () => {
  return (
    <GuestRoute>
      <div className="flex flex-col md:flex-row min-h-screen  shadow-lg sm:w-full md:w-full lg:w-3/4 mx-auto bg-blue-50 mt-10 mb-8">
        <LeftImg imgSrc={imgsrc} />
        <LogInForm />
      </div>
    </GuestRoute>
  )
};

export default loginPage;