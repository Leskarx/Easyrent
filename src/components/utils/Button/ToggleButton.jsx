"use client";
import React, { useState } from 'react'
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function ToggleButton({listingId,isAvailable}) {
  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(isAvailable)
  async function change(value){
    setLoading(true)
    try {
      const response = await axios.post('/api/changeavailable',{listingId,value})
     toast.success("Updated successfully")
      setLoading(false)
      
      setIsChecked(!isChecked)
    } catch (error) {
      
      toast.error("An error occurred")
    }

    console.log("Value is ",!value);

  }


  const handleCheckboxChange = () => {
    change(isChecked)
  }

  return (
    <>
    {
      loading && <LoadingScreen/>
    }
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-6 w-12 rounded-full ${
              isChecked ? 'bg-red-500' : 'bg-black'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-[150%]' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}


