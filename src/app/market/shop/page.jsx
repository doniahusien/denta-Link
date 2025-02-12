import React from 'react'
import HeaderSection from '@/components/UI/HeaderSection'
import SearchInput from '@/components/UI/SearchInput'
import ToolList from '@/components/market/ToolList'
const shopPage = () => {
  return (
    <>
      <div className="relative pb-5">
        <HeaderSection imgURL="/images/market/header.png" textDir="center" title="you Know and Trust" subtitle="All the Brands" />
        <SearchInput href="/market/shop/add-tool" />

      </div>
      <div className='pt-10'>
        <ToolList />
      </div>

    </>

  )
}

export default shopPage