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
import MscreenText from '../utils/text/MscreenText';

export default function LargeBookingSection({toggleLarge,date,setDate,listingData,currentUser}) {
  const [isLoading, setIsLoading] = useState(false)
  const [bookedName, setBookedName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
 
  
  const handleSelect = (data) => {
    setDate(data)
  }
  async function handleBook(){
    // console.log("data ................>",parseInt(phoneNumber));
   
    try {
      if(!currentUser || bookedName==""|| phoneNumber=="" || date==null){
        return toast.error("Please fill all the fields")
      }
      setIsLoading(true)
      const res=await axios.post("/api/reservation",{listingId:listingData?.id,userId:currentUser?.id,startDate :date,phoneNumber,bookedName})
      toast.success("Request sent successfully")
      console.log("...........>",res);
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
   {/* background */}
    <main className=' fixed inset-0 bg-slate-900 opacity-75 z-20  '>

      
</main>
{/* main section */}
<main className=' fixed inset-0 z-[2000] flex justify-center items-center '>
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

className=' w-full md:w-[80%]  md:h-max h-full flex flex-col   gap-2 md:gap-1 bg-white rounded-lg shadow-2xl shadow-black p-4 md:px-10 md:py-14 items-center'
    
    >
     
<main className=' w-full h-full md:h-max flex flex-col md:flex-row'>
  {/* left section */}
  <div className='  w-full md:w-[50%] h-1/3 md:h-max'>
  <main>
  <div className=' cursor-pointer w-max h-max md:pb-10' onClick={()=>{
      toggleLarge()
   }}>
   <FaArrowLeft size={16} />
   </div>
  </main>
   <main className='w-full flex justify-center '>
   <div className='w-[80%] md:w-[90%] flex flex-col gap-3'>
   <MscreenText bookingPage title='Name' placeholder="Enter your name" value={bookedName} setValue={setBookedName} />
    <MscreenText type='number' bookingPage title='Phone Number' placeholder="Enter phone number" value={phoneNumber} setValue={setPhoneNumber} />
   </div>
   </main>


  </div>
  {/* right section */}
<div className=' w-full md:w-1/2 h-1/2 md:h-max md:border-l-2 border-black/20'>
<section className=' font-normal flex w-full justify-center text-base md:text-xl'><p>Select the starting date </p></section>

<div className='w-full h-max'>
         <section className=' flex justify-center h-max items-center '>
             <Calendar date={date} onChange={handleSelect}  />
             </section>

       
     </div>
</div>
</main>



  <div className=' w-[40%] md:w-[20%]  md:mt-5 '>
  <Button buttonTitle='Book' handleSubmit={handleBook} isLoading={isLoading} />
  </div>






      
    </motion.div>


  </main>



</main>

   </>
  )
}
