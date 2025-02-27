"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPatientsByTitle } from "@/redux/features/patient/patientThunk";
import { setSearchTerm } from "@/redux/features/patient/patientSlice";
import { setSearchTool } from "@/redux/features/exchange/exchangeSlice";
import { fetchExchangeByName } from "@/redux/features/exchange/exchangeThunk";
import Link from "next/link";

const SearchInput = ({ href, title, name, placeholder }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.patient.searchTerm);
  const searchTool = useSelector((state) => state.exchange.searchTool);

  const handleSearch = (e) => {
    const value = e.target.value;

    if (title) {
      dispatch(setSearchTerm(value));
      if (value.length >= 3) {
        dispatch(fetchPatientsByTitle(value)); 
      }
    } else if (name) {
      dispatch(setSearchTool(value));
      if (value.length >= 3) {
        dispatch(fetchExchangeByName(value)); 
      }
    }
  };

  return (
    <div className="absolute top-[99%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-wrap md:flex-nowrap justify-around items-center shadow-xl rounded-lg px-4 py-3 bg-white w-full md:w-2/3 lg:w-1/2 space-x-0 md:space-x-7">
          <input
            type="text"
            placeholder={placeholder}
            value={title ? searchTerm : searchTool}
            onChange={handleSearch}
            className="w-full md:w-2/3 px-4 py-2 text-gray-700 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 md:mb-0"
          />
          <Link
            href={href}
            className="bg-blue-500 text-white w-full md:w-auto text-center px-4 py-2 rounded-md text-sm hover:bg-blue-600"
          >
            {title || name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;


