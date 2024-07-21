"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import LoadingScreen from '@/components/loadingScreen/LoadingScreen';
import { MdDelete } from "react-icons/md";
import CancelLargeSection from '@/components/Booking/CancelLargeSection';
import { FaEye } from "react-icons/fa";
export default function MyFavCard({title,src,price,location,id,userId}) {
  const [isloading,setIsloading]=useState(false)
  const [largeSection,setLargeSection]=useState(false)


  const data={
    listingId:id,
    userId
  }
 
  const router=useRouter()
  return (
 <>
   <section  className='col-span-1  group  border-2 rounded-xl pb-2 shadow-sm  '>
   <div className="flex flex-col  justify-center items-center gap-2 w-full h-max">
   <div className=' relative cursor-pointer rounded-t-xl w-full h-[260px] bg-slate-200  overflow-hidden '>
      
      <Image
      className=' object-cover  w-full h-full rounded-t-lg '
      src={src||"/Frame 5.png"} 
      
      alt='Image'
     fill
      quality={100}
      priority                                                      
  
  
      /> 

<section className=' absolute top-3 right-3 flex flex-row-reverse  gap-3   md:gap-1'>
<div onClick={()=>{
  setLargeSection(true)
}} title='Delete' className='  bg-black rounded-full p-1  '>
<MdDelete size={22} color='red'/>
</div>


<div onClick={()=>{
    setIsloading(true)

      router.push(`/listing/${id}`)
    
   }}  title='View' className='  bg-black rounded-full p-1  '>
<FaEye size={22} color='red'/>
</div>
</section>

     
     
    
  </div>
  <div className=" flex flex-col relative p-2  w-full  ">
  <p className=' flex items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] font-semibold text-lg overflow-x-scroll text-nowrap '>{location} (<span className=' text-sm'>{title}</span>)</p>
   
    <p><span className=' text-base font-medium  '>₹ {price}</span> <span className=' font-light text-sm '>monthly</span> </p>

   
    
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
      largeSection && <CancelLargeSection setToggle={setLargeSection} id={data} route="/api/removefavourite" toastMessage="Removed successfully" text='Do you want to remove it from favourite?' smallText='Action cannot be undo'/>
    }
 </>
  )
}
