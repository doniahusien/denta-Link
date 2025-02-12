import React from 'react'
import LeftImg from '@/components/UI/LeftImg'
import imgsrc from '../../../../../public/images/market/exchange.svg'
import ExchangeForm from '@/components/market/ExchangeForm'
const addToolPage = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row py-10 shadow-lg sm:w-full md:w-full lg:w-3/4 mx-auto bg-white-50 my-40">

                <LeftImg imgSrc={imgsrc} header="Let’s add product you want exchange it" />

                <ExchangeForm />

            </div>
        </>
    )
}

export default addToolPage