import React from 'react'
import Image from 'next/image'
const LeftImg = ({imgSrc,header}) => {
    return (
        <div className="hidden md:flex flex-col gap-5 flex-1 justify-center items-center ">
            {header && <h1 className='text-2xl text-center w-1/2'>{header}</h1>}
            <Image
                src={imgSrc}
                alt='signup'
                className="max-w-full h-3/5 "
            />
        </div>
    )
}

export default LeftImg