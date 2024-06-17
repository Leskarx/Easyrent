"use client"
import React from 'react'
import Image from 'next/image'
import OwnerDetailsSection from './OwnerDetailsSection'

export default function OwnerDetails({ownerData}) {
  return (
    <section className=' flex justify-center items-center py-6 px-3 h-full w-full md:w-[40%]'>
        <main className='  gap-2 flex justify-center items-center flex-col h-full w-full '>
          {/* text */}
        <div className=' w-full h-max flex justify-center '>
 <p className=' text-2xl text-neutral-600 font-semibold'> 
    Owner Details
  </p>
 </div>

 {/* image */}
 <div className='mt-4 relative h-24 aspect-square rounded-full'>
   <div className='  inset-0 '>
    <Image
    className=' rounded-full'
    src={ownerData?.image||"/placeholder.png"}
    alt='Owner Image'
    quality={100}
    priority
    fill
    style={{
      objectFit:'cover'
    }}
    />


   </div>

 </div>
 {/* owner details */}
 <OwnerDetailsSection ownerData={ownerData}/>




        </main>
      
    </section>
  )
}
