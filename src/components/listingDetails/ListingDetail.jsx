import React from 'react'
import Image from 'next/image'

export default function ListingDetail({listingData,ownerData,currentUser}) {
  console.log("listing detain page",listingData);
  return (
    <div className=' absolute w-full h-full'>
     <div className=' relative flex flex-col items-center w-full h-full '>
      <div className=' w-full h-full mt-20 bg-white pt-10 pl-48 pr-48  '>
        <div className=' flex flex-col gap-3  w-full h-full'>
          <div className='flex justify-between items-center w-full '>
            <h1 className=' text-4xl font-semibold'>{listingData?.locationName}</h1>
            <div className=' flex gap-8'>
              <p className=' underline'>Share</p>
              <p className=' underline'>Save</p>
            </div>
           
          </div>


         <section className=' flex w-full h-[65%]  gap-5 '>
<div className='relative w-[50%] h-full '>
<div className='  w-full  h-full inset-0'>
                    <Image
               className=' rounded-2xl'
                   alt='Image'
                   src={listingData?.mainImageSrc}
                   quality={100}
                   priority                                                      
                  fill 
                  style={{
                   objectFit:'cover'
                  }}
                  


                   />
                  </div>
</div>

<div className=' w-[50%] h-full '>
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
 <div className=' mt-6'>
    
    <p>{listingData?.description}</p>
 </div>
 


</div>
         </section>

        </div>
      </div>

     </div>
    </div>
  )
}
