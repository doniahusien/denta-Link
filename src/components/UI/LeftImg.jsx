import React from 'react'
import Image from 'next/image'
const LeftImg = ({imgSrc}) => {
    return (

        <div className="hidden md:flex flex-1 justify-center items-center ">
            <Image
                src={imgSrc}
                alt='signup'
                className="max-w-full h-3/5 "
            />
        </div>
    )
}

export default LeftImg