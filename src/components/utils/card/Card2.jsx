"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
import Button from '../Button/Button';
import CancelLargeSection from '@/components/Booking/CancelLargeSection';
export default function Card2({title,src,price,location,rating,id,date,status,reservationId}) {
  const [isloading,setIsloading]=useState(false)
  const [toggle,setToggle]=useState(false)
  if(status=="pending"){
    status="Request sent"
  }
  
 
    const day=date.toDateString()
  const router=useRouter()
  return (
 <>
   <section  className='col-span-1  group  '>
   <div className="flex flex-col  justify-center items-center gap-2 w-full h-max">
   <div onClick={()=>{
    setIsloading(true)

      router.push(`/listing/${id}`)
    
   }} className=' relative cursor-pointer rounded-xl w-full h-[260px] bg-slate-200  overflow-hidden '>
      

      <Image
      className=' object-cover  w-full h-full rounded-lg group-hover:scale-110 transition duration-300 ease-in-out'
      src={src||"/Frame 5.png"} 
      
      alt='Image'
     fill
      quality={100}
      priority                                                      
  
  
      /> 


     
     
    
  </div>
  <div className=" flex flex-col relative  w-full ">
  <p className=' font-semibold text-lg'>{location} (<span className=' text-sm'>{title}</span>)</p>
    <p className=' font-semibold text-slate-800 text-base'>{day}</p>
    <p><span className=' text-base font-medium  '>₹ {price}</span> <span className=' font-light text-sm '>monthly</span> </p>

    <main className=' w-full py-2 flex items-center justify-between gap-2'>
    
    <div onClick={()=>{
        setToggle(!toggle)
    }} className=' cursor-pointer'>
        <p className=' font-light pl-4'>Cancel</p>

    </div>
    <div className=' w-[70%]'>
    <Button buttonTitle={status}  />
    </div>
    </main>
   
    
  </div>
   </div>
   </section>
   {/* loading screen */}
   {
    isloading && (
      <LoadingScreen/>
    )
   }
   {
    toggle && (
       <CancelLargeSection setToggle={setToggle} reservationId={reservationId}/>
    
    )
   }
 </>
  )
}