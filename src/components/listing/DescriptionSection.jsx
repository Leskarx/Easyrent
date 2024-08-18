"use client"
import React from 'react'

export default function DescriptionSection({register,objectId,defaultValue}) {
  return (
    <main className=' w-full text-black p-2 h-full  '>
        <label htmlFor="des" className=' font-semibold text-sm'>
            ADD DESCRIPTION
        </label>
        <textarea 
        defaultValue={defaultValue}
        {...register(objectId, { required: true })} id="des" className=' outline-none bg-[#F9F9F9] border-2 
        w-full h-full p-2
        '/>

      
    </main>
  )
}
