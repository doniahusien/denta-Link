"use client";

import ProtectedRoute from '@/components/ProtectedRoute';
import React from 'react'
import ExchangeToolList from '@/components/market/ExchangeToolList'
import HeaderSection from '@/components/UI/HeaderSection'
import SearchInput from '@/components/UI/SearchInput'
const exchangePage = () => {
  return (
    <>
      <ProtectedRoute>
    <div className="relative pb-5">
      <HeaderSection imgURL="/images/market/header.png" textDir="center" title="you Know and Trust" subtitle="All the Brands" />
      <SearchInput href="/market/exchange/add-tool" title="Add Tool" placeholder="search for Tool"/>

    </div>
    <div className='pt-10'>
      <ExchangeToolList />
    </div>
    </ProtectedRoute>
  </>
  )
}

export default exchangePage