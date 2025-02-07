import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
const Logo = () => {
    return (
        <div>
            <Image src={logo} alt="logo" width={320} height={200} />
        </div>

    )
}

export default Logo