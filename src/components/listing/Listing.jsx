"use client"
import LeftSection from '@/components/listing/LeftSection'
import RightSection from '@/components/listing/RightSection'
import React from 'react'
import { useForm } from "react-hook-form"


export default function Listing() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } =useForm({
    location:"",
    locationName:"",
    price:"",
    description:""


  })
  

 async function onSubmit(data){
console.log("listing ->>>>>",data);

  }



  return (
    <div className=' flex justify-center mt-24 h-screen'>
     <section className=' p-4 w-[70%] h-[80%] bg-white flex flex-col'>
  <main className='   h-[85%] w-full flex '>
    <RightSection register={register}/>
    <LeftSection register={register}/>
      
  </main>
      <section className=' py-6 w-full h-[25%]   flex justify-center items-end '>
        <button onClick={handleSubmit(onSubmit)} className=' bg-red-500 text-white px-6 py-2 rounded-lg'>
          Add Now
        </button>
         
      </section>


     </section>
    </div>
  )
}
