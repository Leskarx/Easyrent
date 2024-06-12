"use client"
import React from 'react'
import AddphotosListing from './AddphotosListing'
import MainImageUpload from './MainImageUpload'

export default function LeftSection({setValue,getValues}) {
  return (
    <div className=' gap-6 flex flex-col justify-center items-center w-full md:w-[50%] h-full border-0 md:border-l border-slate-400 '>
       <MainImageUpload setValue={setValue}/>
      <p className=' font-semibold'>
          Add photos
        </p>
   <section className=' gap-3 flex w-max h-max   '>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    <AddphotosListing setValue={setValue} getValues={getValues} id="imagesSrc"/>
    

   </section>


      
    </div>
  )
}
