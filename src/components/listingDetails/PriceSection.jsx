"use client";
import React from 'react'
import Button from '../utils/Button/Button'

export default function PriceSection({listingData}) {

    function handleSubmit(){
        console.log("book now clicked");
    }

  return (
    <div className='  flex   justify-center items-center w-full md:w-[40%] h-[40%] md:h-full gap-4 md:gap-10'>
    <p className=' text-center'><span className=' text-2xl md:text-4xl font-semibold'>₹ {listingData?.price }</span>/<span className=' font-light'>{listingData?.intervel||"monthly"}</span> </p>
<div className=' w-[40%] md:w-[30%]'>
    <Button buttonTitle='Book now' isLoading={false} handleSubmit={handleSubmit} />
</div>

    {/* <button className=' py-4  bg-red-500 rounded-lg text-white '>Book now</button> */}
  
  </div>
  )
}
