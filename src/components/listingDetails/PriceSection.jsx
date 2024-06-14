"use client";
import React from 'react'
import Button from '../utils/Button/Button'
import { useState } from 'react';
import LargeBookingSection from './LargeBookingSection';

export default function PriceSection({listingData,currentUser}) {
  const [islarge, setislarge] = useState(false)
  const [date, setDate] = useState(null);

    function toggleLarge(){
      setislarge((prev)=>!prev)
        // console.log("book now clicked");
    }

  return (
 <>
    <div className='  flex   justify-center items-center w-full md:w-[40%] h-[40%] md:h-full gap-4 md:gap-10'>
    <p className=' text-center'><span className=' text-2xl md:text-4xl font-semibold'>₹ {listingData?.price }</span>/<span className=' font-light'>{listingData?.intervel||"monthly"}</span> </p>
<div className=' w-[40%] md:w-[30%]'>
    <Button buttonTitle='Book now' isLoading={false} handleSubmit={toggleLarge} />
</div>

    {/* <button className=' py-4  bg-red-500 rounded-lg text-white '>Book now</button> */}
  
  </div>
  {
    islarge&&(
      <LargeBookingSection toggleLarge={toggleLarge} listingData={listingData} date={date} setDate={setDate} currentUser={currentUser} />

    )
  }
 
 </>
  )
}
