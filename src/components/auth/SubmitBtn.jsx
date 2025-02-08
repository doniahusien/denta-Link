import React from 'react'

const SubmitBtn = ({text,loading}) => {
    return (
        <button disabled={loading} className="w-full bg-blue-500 text-white py-2 rounded-md text-md hover:bg-blue-600">
          {loading? "Loading":text}
        </button>
    )
}

export default SubmitBtn