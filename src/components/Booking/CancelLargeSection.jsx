"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Button from '../utils/Button/Button';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CancelLargeSection({setToggle,id,route,toastMessage="Booking cancelled successfully",text='Do you want to cancel your booking?',
smallText='your request will be updated by the owner'}) {
    const router=useRouter()
    const [loading,setLoading]=useState(false)
    async function handleSubmit(){
        setLoading(true)
        const response=await fetch(route,{
            method:'POST',
            body:JSON.stringify({
              id
            })
        })

        if(response.ok){
            setToggle(false)
            setLoading(false)
            toast.success(toastMessage)
           router.refresh()

            
        }
        
        

    }

  return (
    <>
   <main className=' overflow-x-hidden fixed inset-0 block  bg-slate-900 opacity-75 z-[1120]'>

   </main>
 <main className=' overflow-x-hidden fixed block  z-[1121]   inset-0  '>
 <main className='overflow-x-hidden flex justify-center items-center  w-full h-full'>
 <motion.div 
 initial={{
    scale: 0.5,
    opacity: 0
 }}
 animate={{
    scale: 1,
    opacity: 1
 }}
 transition={{
    type: 'spring',
    stiffness: 260,
    damping: 20
 }}

 className=' w-[90%] md:w-[40%] h-max flex flex-col  items-start gap-6 bg-white rounded-lg shadow-2xl shadow-black p-4' >
  
   <div>
      <p className=' font-semibold text-lg '>{text}</p>
      <p className=' font-light text-sm'>{smallText}</p>
   </div>
   <main className=' w-full flex gap-4'>
    <button onClick={
        ()=>{
            setToggle(false)

        }
    } className=' w-full border-2 font-normal border-black/20 rounded-lg'>No</button>
   
   <Button buttonTitle='yes' handleSubmit={handleSubmit} isLoading={loading} />
   </main>

  



</motion.div>
 </main>
 </main>

   
   </>
  )
}
