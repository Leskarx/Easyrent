import React from 'react'
import AddphotosListing from './AddphotosListing'

export default function LeftSection() {
  return (
    <div className=' gap-6 flex flex-col justify-center items-center w-[50%] h-full border-l border-slate-400 '>
      <section className=" rounded-full h-40 w-40 bg-green-900">
     

      </section>
      <p className=' font-semibold'>
          Add photos
        </p>
   <section className=' gap-3 flex w-max h-max   '>
    <AddphotosListing/>
    <AddphotosListing/>
    <AddphotosListing/>
    <AddphotosListing/>

   </section>


      
    </div>
  )
}
