"use client"
import React from 'react'
import AddphotosListing from './AddphotosListing'
import MainImageUpload from './MainImageUpload'

export default function LeftSection({setValue}) {
  return (
    <div className=' gap-6 flex flex-col justify-center items-center w-[50%] h-full border-l border-slate-400 '>
       <MainImageUpload setValue={setValue}/>
      <p className=' font-semibold'>
          Add photos
        </p>
   <section className=' gap-3 flex w-max h-max   '>
    <AddphotosListing setValue={setValue} id="imageSrc1"/>
    <AddphotosListing setValue={setValue} id="imageSrc2"/>
    <AddphotosListing setValue={setValue} id="imageSrc3"/>
    <AddphotosListing setValue={setValue} id="imageSrc4"/>
    

   </section>


      
    </div>
  )
}
