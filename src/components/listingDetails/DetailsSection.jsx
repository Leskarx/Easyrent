import React from 'react'

export default function DetailsSection({listingData}) {
  return (
    <div className=' w-[40%] h-full '>
    <div className=' flex gap-2 font-normal  text-lg'>
    <p>{listingData?.location}</p>
      <p>{listingData?.state||"State"}</p>
    </div>
    <div>
      <p className=' font-semibold text-4xl'>{listingData?.slogan||"Slogan like 2bhk property "}</p>
      <p className=' font-light ' >For a {listingData?.paymentIntervel||"monthly"} price {listingData?.price} INR only. </p>
    </div>
    <div>
     Rating division
    </div>
    <div className=' mt-6  text-wrap '>
       
       <p >{listingData?.description}</p>
    </div>
    
   
   
   </div>
  )
}
