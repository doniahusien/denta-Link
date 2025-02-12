import React from 'react'
import ExchangeToolList from '@/components/market/ExchangeToolList'
import HeaderSection from '@/components/UI/HeaderSection'
import SearchInput from '@/components/UI/SearchInput'
const exchangePage = () => {
  return (
    <>
    <div className="relative pb-5">
      <HeaderSection imgURL="/images/market/header.png" textDir="center" title="you Know and Trust" subtitle="All the Brands" />
      <SearchInput href="/market/exchange/add-tool" />

    </div>
    <div className='pt-10'>
      <ExchangeToolList />
    </div>

  </>
  )
}

export default exchangePage