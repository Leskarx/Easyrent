"use client";
import React from 'react'
import { FaSearch } from "react-icons/fa";
import MobileSearchBarPopout from './MobileSearchBarPopout';
import { useState } from 'react';

export default function MobileSearchBar({data,setToggle}) {
 
  const [popout, setPopout] = useState(false)
  return (
<>
<main onClick={()=>{
      setPopout(true)
    
    }}  className='absolute -top-12 shadow-black/25 drop-shadow-xl shadow-lg rounded-lg left-1/2 -translate-x-1/2 bg-white h-[70px]  block md:hidden z-[200] w-[88%] p-2'>
    <main className=' w-full h-full flex gap-4   '>
    <div  className=' w-full h-full flex gap-5 px-3  items-center  rounded-lg border  '>
    <FaSearch size={20} />
    <section className=' w-full '>
      <p className=" font-semibold">Where?</p>
      <p className=' font-light text-sm'>
        Pincode . Location
      </p>

    </section>
      

</div>
    </main>

   </main>


   {

popout && (
  <MobileSearchBarPopout setPopout={setPopout} data={data} setToggle={setToggle}   />
)

   }


</>
  )
}
