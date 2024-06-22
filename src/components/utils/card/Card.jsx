"use client";
import React from 'react'
import Image from 'next/image'
import Heartbutton from '@/components/heartButton/Heartbutton'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
export default function Card({title,src,price,location,rating,id,type="Type"}) {
  const [isloading,setIsloading]=useState(false)
  if(type=="pg"){
    type="PG"
  }
  if(type=="rent"){
    type="RENT"
  }
  const router=useRouter()
  console.log("search page................>",type)
  return (
 <>
   <section onClick={()=>{
    setIsloading(true)

      router.push(`/listing/${id}`)
    
   }} className='col-span-1 cursor-pointer group  '>
   <div className="flex flex-col border-2 rounded-xl shadow-lg shadow-black/15  md:shadow-black/45   justify-center items-center gap-2 w-full">
   <div className=' relative rounded-t-xl w-full aspect-square bg-slate-200  overflow-hidden '>
      

      <Image
      className=' object-cover   w-full h-full rounded-t-xl group-hover:scale-110 transition duration-300 ease-in-out'
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
  <div className=" flex flex-col relative p-2  w-full ">
    <p className=' font-semibold text-lg '>{location} (<span className=' text-sm text-center'>{title}</span>)</p>

    <p className=' font-semibold text-red-500 text-sm tracking-wider '>{type||"TYPE"} |  </p>
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
