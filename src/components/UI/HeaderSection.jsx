import React from 'react';

const HeaderSection = ({ title, subtitle, imgURL }) => {
    return (
        <header
            className={`relative w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center`}
            style={{
                backgroundImage: `url('${imgURL}')`,
                backgroundPosition: 'center',
                minHeight: '80vh',
            }}
        >
            <div className="bg-white/40 w-full h-full absolute top-0 left-0"></div>
            <div className="relative z-20 text-4xl sm:text-4xl md:text-6xl text-black md:px-28 sm:px-4 text-center">
                <p className="font-thin text-[#5A5A5A] leading-12 pb-5">{subtitle}</p>
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default HeaderSection;
