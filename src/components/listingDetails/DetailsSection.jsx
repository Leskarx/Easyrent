import React from 'react'
import RatingComponent from '../utils/rating/Rating'

export default function DetailsSection({listingData}) {
  return (
    <div className=' w-full lg:w-[40%] lg:h-full  h-max  '>
    <div className=' flex gap-0 font-normal  text-base md:text-lg'>
    <p className='[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-nowrap overflow-x-auto'>{listingData?.location}</p>
      <p className='[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-nowrap overflow-x-auto'>,{listingData?.state||"state"}</p>
    </div>
    <div>
      <p className=' font-semibold text-2xl text-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] '>{listingData?.tagLine||"Slogan like 2bhk property "}</p>
      <p className=' font-light  text-sm md:text-base  ' >For a {listingData?.paymentIntervel||"monthly"} price {listingData?.price} INR only. </p>
    </div>

    <RatingComponent  />
    
    <div className='  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:h-[64%] overflow-scroll   '>
       
       <p className=' text-[14px]  md:text-base [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-scroll  ' >{listingData?.description}</p>
    </div>
    
   
   
   </div>
  )
}
