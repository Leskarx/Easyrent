import React from 'react'

export default function DetailsSection({listingData}) {
  return (
    <div className=' w-full lg:w-[40%] lg:h-full  h-max  '>
    <div className=' flex gap-2 font-normal  text-base md:text-lg'>
    <p>{listingData?.location}</p>
      <p>{listingData?.state||"State"}</p>
    </div>
    <div>
      <p className=' font-semibold text-2xl '>{listingData?.slogan||"Slogan like 2bhk property "}</p>
      <p className=' font-light  text-sm md:text-base  ' >For a {listingData?.paymentIntervel||"monthly"} price {listingData?.price} INR only. </p>
    </div>
    <div>
     Rating division
    </div>
    <div className=' mt-6  text-wrap overflow-scroll no-scrollbar  '>
       
       <p className=' text-[14px] md:text-base ' >{listingData?.description}</p>
    </div>
    
   
   
   </div>
  )
}
