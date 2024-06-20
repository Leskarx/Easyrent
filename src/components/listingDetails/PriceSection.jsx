"use client";
import React, { useEffect } from 'react'
import Button from '../utils/Button/Button'
import { useState } from 'react';
import LargeBookingSection from './LargeBookingSection';

export default function PriceSection({listingData,currentUser}) {
  const [islarge, setislarge] = useState(false)
  const [date, setDate] = useState(null);
  useEffect(()=>{
    islarge?document.body.style.overflow='hidden':document.body.style.overflow='auto'
  },[islarge])

    function toggleLarge(){
      setislarge((prev)=>!prev)
        // console.log("book now clicked");
    }

  return (
 <>
    <div className='  flex   justify-center items-center w-full lg:w-[40%] h-[40%] lg:h-full gap-4 lg:gap-10'>
    <p className=' text-center'><span className=' text-2xl  font-semibold'>₹ {listingData?.price }</span>/<span className=' font-light'>{listingData?.intervel||"monthly"}</span> </p>
<div className=' w-[40%] lg:w-[50%]'>
    <Button buttonTitle='Book now' isLoading={false} handleSubmit={toggleLarge} />
</div>

    {/* <button className=' py-4  bg-red-500 rounded-lg text-white '>Book now</button> */}
  
  </div>
  {
    islarge&&(
      <LargeBookingSection  toggleLarge={toggleLarge} listingData={listingData} date={date} setDate={setDate} currentUser={currentUser} />

    )
  }
 
 </>
  )
}
