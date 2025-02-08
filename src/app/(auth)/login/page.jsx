import React from 'react'
import LeftImg from '@/components/UI/LeftImg';
import imgsrc from "../../../../public/images/login.svg";
import LogInForm from '@/components/auth/LogInForm';
import GuestRoute from '@/components/GuestRoute';
const loginPage = () => {
  return (
    <GuestRoute>
      <div className="flex flex-col md:flex-row min-h-screen w-3/4 mx-auto">
        <LeftImg imgSrc={imgsrc} />
        <LogInForm />
      </div>
    </GuestRoute>
  )
};

export default loginPage;