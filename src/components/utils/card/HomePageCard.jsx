"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
import { IoMdStar } from "react-icons/io";
export default function HomePageCard({title,src,price,location,rating,id,type="Type"}) {
  const [isloading,setIsloading]=useState(false)
  const router=useRouter()
  return (
 <>
   <section onClick={()=>{
    setIsloading(true)

      router.push(`/listing/${id}`)
    
   }} className='col-span-1 cursor-pointer group  '>
   <div className="flex flex-col rounded-lg justify-center items-center gap-2 w-[180px] md:w-full">
   <div className=' relative rounded-lg w-full h-[300px] bg-slate-200 overflow-hidden   '>
      

    <div className=' inset-0 '>
    <Image
      className=' object-cover   w-full h-full rounded-md md:group-hover:scale-110 transition duration-300 ease-in-out'
      src={src||"/Frame 5.png"} 
      
      alt='Image'
     fill
      quality={100}
      priority                                                      
  
  
      /> 
    </div>

     
     
    
  </div>
  <div className=" flex flex-col relative p-2  w-full ">
    <p className=' flex items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-scroll text-nowrap font-semibold text-lg '>{location}</p>
    <p><span className=' text-base font-medium  '>₹ {price}</span> <span className=' font-light text-sm '>monthly</span> </p>
    <p className='  flex items-center'>
      <span className=' text-sm font-semibold font-sans'>
      {rating}
      </span>
    <span className='text-green-700 font-sans'><IoMdStar size={16}/></span>
    </p>
    
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
