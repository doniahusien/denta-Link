import React from 'react'
import HeaderSection from '@/components/UI/HeaderSection'
import SearchInput from '@/components/UI/SearchInput'
import ToolList from '@/components/market/ToolList'
import ProtectedRoute from '@/components/ProtectedRoute'
const shopPage = () => {
  return (
    <>
      <ProtectedRoute>
      <div className="relative pb-5">
        <HeaderSection imgURL="/images/market/header.png" textDir="center" title="you Know and Trust" subtitle="All the Brands" />
        <SearchInput href="/market/shop/add-tool" title="Add Tool" placeholder="search for tool" />

      </div>
      <div className='pt-10'>
        <ToolList />
      </div>
      </ProtectedRoute>
    </>

  )
}

export default shopPage