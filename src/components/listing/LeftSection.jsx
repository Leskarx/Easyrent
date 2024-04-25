"use client"
import React from 'react'
import AddphotosListing from './AddphotosListing'
import MainImageUpload from './MainImageUpload'

export default function LeftSection({setValue}) {
  (()=>{
    // setValue()
  })()
  return (
    <div className=' gap-6 flex flex-col justify-center items-center w-[50%] h-full border-l border-slate-400 '>
       <MainImageUpload setValue={setValue}/>
      <p className=' font-semibold'>
          Add photos
        </p>
   <section className=' gap-3 flex w-max h-max   '>
    <AddphotosListing/>
    <AddphotosListing/>
    <AddphotosListing/>
    <AddphotosListing/>
    <MainImageUpload setValue={setValue}/>

   </section>


      
    </div>
  )
}
