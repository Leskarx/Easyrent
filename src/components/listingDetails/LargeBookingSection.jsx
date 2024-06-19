"use client"
import React from 'react'
import Button from '../utils/Button/Button'
import { useState } from 'react';
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion"
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
    <main className=' fixed inset-0 bg-slate-900 opacity-75 z-20  '>

      
</main>
<main className=' fixed inset-0 z-50 flex justify-center items-center '>
  <main className='flex justify-center items-center  w-full h-full'>
    <motion.div
    
 initial={{
  scale: 0.94,
  opacity: 0
}}
animate={{
  scale: 1,
  opacity: 1
}}

className=' w-[90%] md:w-max h-max flex flex-col  items-start gap-2 md:gap-1 bg-white rounded-lg shadow-2xl shadow-black p-4 md:px-10'
    
    >
      <div className=' cursor-pointer' onClick={()=>{
      toggleLarge()
   }}>
   <FaArrowLeft size={16} />
   </div>

   <section className=' font-normal flex w-full justify-center text-xl'><p>Select the starting date </p></section>

   <div className='w-full h-max'>
            <section className=' flex justify-center h-max items-center p-3'>
                <Calendar date={date} onChange={handleSelect}  />
                </section>

          
        </div>

   <Button buttonTitle='Book' handleSubmit={handleBook} isLoading={isLoading} />






      
    </motion.div>


  </main>



</main>

   </>
  )
}
