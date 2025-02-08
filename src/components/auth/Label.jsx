import React from 'react'

const Label = ({text,flag}) => {
    return (
        <>
            <label className="block text-gray-700  font-semibold ">
                {text}
                {!flag&&
                    <span className='text-red-600 font-bold text-xl'>*</span>
                }
            </label>
        </>
    )
}

export default Label