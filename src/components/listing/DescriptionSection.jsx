"use client"
import React from 'react'

export default function DescriptionSection({register,objectId}) {
  return (
    <main className=' w-full text-black p-2 h-full  '>
        <label htmlFor="des" className=' font-semibold text-sm'>
            ADD DESCRIPTION
        </label>
        <textarea {...register(objectId, { required: true })} id="des" className=' outline-none border-slate-300 border-2 
        w-full h-full p-2
        '/>

      
    </main>
  )
}
