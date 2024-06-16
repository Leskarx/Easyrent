"use client";
import React from 'react'
import Image from 'next/image'
import Heartbutton from '@/components/heartButton/Heartbutton'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
export default function Card({title,src,price,location,rating,id}) {
  const [isloading,setIsloading]=useState(false)
  const router=useRouter()
  return (
 <>
   <section onClick={()=>{
    setIsloading(true)

      router.push(`/listing/${id}`)
    
   }} className='col-span-1 cursor-pointer group  '>
   <div className="flex flex-col  justify-center items-center gap-2 w-full">
   <div className=' relative rounded-xl w-full aspect-square bg-slate-200  overflow-hidden '>
      

      <Image
      className=' object-cover  w-full h-full rounded-lg group-hover:scale-110 transition duration-300 ease-in-out'
      src={src||"/Frame 5.png"} 
      
      alt='Image'
     fill
      quality={100}
      priority                                                      
  
  
      /> 

<div className=' absolute top-3  right-3'>
<Heartbutton/>
</div>
     
     
    
  </div>
  <div className=" flex flex-col relative  w-full ">
    <p className=' font-semibold text-lg'>{location}</p>
    <p><span className=' text-base font-medium  '>₹ {price}</span> <span className=' font-light text-sm '>monthly</span> </p>
    <p className='absolute top-1/2 -translate-y-1/2 self-end'>{rating}</p>
    
  </div>
   </div>
   </section>
   {/* loading screen */}
   {
    isloading && (
      <LoadingScreen/>
    )
   }
 </>
  )
}
