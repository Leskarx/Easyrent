"use client";
import {useState} from 'react'

export default function InputBox({objectId,name,type,register,errors,placeholder}) {
const [input,setInput]=useState("")
// console.log(errors);

  return (
    <div className='relative mt-4'>
      <input
      {...register(objectId, { required: true })}
      type={type} name={name} value={input} onChange={(event)=>{
        setInput(event.target.value)

      }} placeholder=" " id={objectId} className={`
      rounded-lg border-2 
      ${errors[objectId]?"border-rose-600":" border-neutral-300 "}
      ${errors[objectId]?"focus:border-black":" focus:border-black "}
      peer w-full px-2 py-3 outline-none font-semibold`} />
      <label htmlFor={objectId}  className={(input=="")?" text-black/70 cursor-text transform duration-150 transtion z-10 text-md peer-focus:text-black/70 bg-white  peer-focus:scale-75 peer-focus:top-0  absolute top-1/2 left-2 -translate-y-1/2  origin-[0] ":"z-10 text-md scale-75 absolute top-0 left-2 -translate-y-1/2   origin-[0] bg-white"}>{placeholder}</label>
      
    </div>
  )
}



