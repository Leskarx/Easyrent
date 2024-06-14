"use client"
import React from 'react'
import Button from '../utils/Button/Button'
import { useState } from 'react';
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function LargeBookingSection({toggleLarge,date,setDate,listingData,currentUser}) {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSelect = (data) => {
    setDate(data)
  }
  async function handleBook(){
    setIsLoading(true)
    try {
      const res=await axios.post("/api/reservation",{listingId:listingData?.id,userId:currentUser?.id,startDate :date})
      toast.success("Request sent successfully")
      console.log(res);
      setTimeout(() => {
        toggleLarge()
      }, 1000);

      
    } catch (error) {
      toast.error("Booking failed")
      console.log(error);

      
    }
    setIsLoading(false)
   
   
  }

  return (
   <>
    <main className=' fixed inset-0 bg-slate-600 z-20 opacity-90 '>

      
</main>
<main className=' fixed inset-0 z-50 flex justify-center items-center '>

    <div className='relative min-w-max  h-[80%] md:h-[60%]  px-10 py-4 bg-white rounded-xl'>
  <section className=' font-normal flex justify-center text-xl'><p>Select the starting date </p></section>
        
        
        <div className='w-full h-max'>
            <section className=' flex justify-center h-max items-center p-3'>
                <Calendar date={date} onChange={handleSelect}  />
                </section>

          <section className=' mt-8  absolute md:bottom-6 w-[80%] left-1/2  -translate-x-1/2 '>  <Button buttonTitle='Book' isLoading={isLoading} handleSubmit={handleBook } /></section>
        </div>
        <div onClick={toggleLarge} className=' absolute -top-10 text-white underline right-14 cursor-pointer'>
            <p>Close</p>
        </div>

    </div>


</main>

   </>
  )
}
